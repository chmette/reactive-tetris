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
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	const [btnText, setBtnText] = useState('Start Game')
	const [togglePause, setTogglePause] = useState(true)

	// media queries
	const mobileView = useMediaQuery({ maxWidth: 600 });

	const [player, updatePlayerPos, resetPlayer, playerRotate, futureTetro] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

	console.log('re-render!');

	//move tetronimo left and right  
	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 })
		}
	}

	const startGame = () => {
		console.log('startGame')
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

	}

	const pauseGame = () => {
		setTogglePause(!togglePause)
		if (togglePause === true) {
			setDropTime(null)
			console.log('Game paused')
		} else {
			setDropTime(1000 / (level + 1) + 200)
			console.log('Game continues');
		}

	}
	

	const drop = () => {
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
				console.log("it's all over now");
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
				console.log('interval on ')
				setDropTime(1000 / (level + 1));
			}
		}
	}


	const dropPlayer = () => {
		// we turn off the interval when pressing arrow down 
		//console.log('interval off');
		setDropTime(null)
		drop();
		setTogglePause(true)
	}


	
	const move = ({key}) => {
		if (!gameOver) {
			// left arrow
			if (key === 'ArrowLeft' ) {
				movePlayer(-1);
			// right arrow
			} else if (key === 'ArrowRight') {
				movePlayer(1);
			// down arrow
			} else if (key === 'ArrowDown') {
				dropPlayer();
				
            // up arrow      
			}else if (key === 'ArrowUp') {
                playerRotate(stage, 1)
            }else if (key === ' ') {
				playerRotate(stage,1)
			}
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
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					
					{!mobileView && <FutureTetro futureTetro={futureTetro} />}
					
					{gameOver ? (<Display gameOver={gameOver} text='Game Over' />) : (
						<div>
							<Display text="Score:" value={score} />
							<Display text="Rows:" value={rows} />
							<Display text="Level:" value={level} />
							{!mobileView && <PauseButton state={togglePause} callback={pauseGame} />}
							
						</div>
					)}
					<StartButton text={btnText} callback={startGame} />

				</aside>

				{mobileView &&
				<MobileControls movePlayer={movePlayer} dropPlayer={dropPlayer} setDropTime={setDropTime} playerRotate={playerRotate} level={level} stage={stage}>
					<PauseButton state={togglePause} callback={pauseGame} />
				</MobileControls>}

			</StyledTetris>

		</StyledTetrisWrapper>


	)
}

export default Tetris;