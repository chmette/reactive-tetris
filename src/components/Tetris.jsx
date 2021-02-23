import React, {useState, useEffect} from 'react';
import {useMediaQuery} from 'react-responsive';
//Game Helper Functions
import { createStage, checkCollision } from '../gameHelpers';
// styles
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
//Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useInterval } from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus'
//Components 
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import PauseButton from './PauseButton';
import MobileControls from './MobileControls';
import FutureTetro from './FutureTetro';


const Tetris = () => {
	// states
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	const [btnText, setBtnText] = useState('Start Game');
	const [togglePause, setTogglePause] = useState(true);
	const [hasGameStarted, setHasGameStarted] = useState(false);
	
	// media queries
	const mobileView = useMediaQuery({ maxWidth: 599 });

	// custom hooks
	const [player, updatePlayerPos, resetPlayer, playerRotate, futureTetro] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


	//move tetronimo left and right  
	const movePlayer = dir => {
		const hasCollided = checkCollision(player, stage, { x: dir, y: 0 });
		// updates position only if no collision has occurred and the game is not paused and not over
		const canMove = !hasCollided && togglePause && !gameOver;
		if (canMove) {
			updatePlayerPos({ x: dir, y: 0 })
		}
	}

	const startGame = () => {
        //reset everything
		setStage(createStage());
		setDropTime(1000)
		resetPlayer();
		setScore(0);
		setLevel(0);
		setRows(0);
		setGameOver(false);
		setBtnText('Reset');
		setTogglePause(true);
		setHasGameStarted(true);
	}

	const pauseGame = () => {
		
		if (!hasGameStarted || gameOver) {
			return;
		}

		setTogglePause(!togglePause);
		if (togglePause === true) {
			setDropTime(null);
		} else {
			setDropTime(1000 / (level + 1) + 200);
		}
	}

	const drop = () => {
		if (gameOver || !hasGameStarted) return;
		
		// Add up level when rows are cleared
		if (rows > (level + 1) * 10) {
			setLevel(prev => prev + 1);
			// increase speed
			setDropTime(1000 / (level + 1) + 200);
		}

		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false })
		} else {
			// Game Over!
			if (player.pos.y < 1) {
				setGameOver(true);
				setDropTime(null);
				setBtnText('Start Game')
				setTogglePause(true)
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	}

	const keyUp = ({key})=>{
		if(!gameOver){
			if(key==='ArrowDown') {
				setDropTime(1000 / (level + 1));
			}
		}
	}

	const dropPlayer = () => {
		// we turn off the interval when pressing arrow down 
		setDropTime(null)
		drop();
		setTogglePause(true)
	}

	const move = ({key}) => {
		if (gameOver  || !hasGameStarted) return;

		// move left
		if (key === 'ArrowLeft' ) {
			movePlayer(-1);
		}
		// move right
		else if (key === 'ArrowRight') {
			movePlayer(1);
		}
		// down arrow: accelerate drop (also un-pauses game)
		else if (key === 'ArrowDown') {
			dropPlayer();
		}
		// rotate if not on pause and game is not over
		else if (key === 'ArrowUp' || key === ' ') {
			togglePause && !gameOver && playerRotate(stage, 1);
		}
	}

	// useEffect changes some states depending on the current screen width:
	useEffect(() => {
		mobileView ? setBtnText('Start') : setBtnText('Start Game');
	}, [mobileView])

	// custom hook by Dan Abramov ( starts interval )
	useInterval(() => {
		drop()
	}, dropTime);

	return (

		<StyledTetrisWrapper role="button" tabIndex="0"  onKeyDown={e => move(e)} onKeyUp={keyUp}>
			<StyledTetris>
				<Stage stage={stage} gameOver={gameOver} notPaused={togglePause} gameStarted={hasGameStarted}/>
				
				<aside>	
					{!mobileView && <FutureTetro futureTetro={futureTetro} />}
					
					{gameOver ? (
						<div>
							<Display gameOver={gameOver} text='You scored:' value={score} />
						</div>
					) : (
						<div>
							<Display text="Score:" value={score} />
							<Display text="Rows:" value={rows} />
							<Display text="Level:" value={level} />
							{!mobileView && <PauseButton mobile={mobileView} state={togglePause} callback={pauseGame} gameStarted={hasGameStarted}/>}	
						</div>
					)}
					{!mobileView && <StartButton text={btnText} callback={startGame} />}
				</aside>

				{mobileView &&
				<MobileControls  currentAffairs={{
					movePlayer, dropPlayer, setDropTime, playerRotate, level, stage, togglePause, gameOver, setTogglePause
				}} >
					<PauseButton state={togglePause} mobile={mobileView} callback={pauseGame} gameStarted={hasGameStarted} />
					<StartButton text={btnText} callback={startGame} />

				</MobileControls>}

			</StyledTetris>
		
		</StyledTetrisWrapper>
	)
}

export default Tetris;