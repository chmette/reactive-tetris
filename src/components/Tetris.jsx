import React, {useState} from 'react';

//Game Helper Functions
 import {createStage, checkCollision} from '../gameHelpers';

// styles
 import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
 import {StyledDirButton,StyledControlWrapper,StyledMobileControls, StyledRotateButton} from './styles/StyledMobileControls'
 import {IoArrowForwardOutline, IoArrowBackOutline, IoArrowDownOutline, IoRefreshOutline} from 'react-icons/io5';

//Hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {useInterval} from '../hooks/useInterval'
import {useGameStatus} from '../hooks/useGameStatus'

//Components 
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import PauseButton from './PauseButton';



const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);
	const [btnText, setBtnText] = useState('Start Game')
	const [togglePause, setTogglePause]=useState(true)


    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel]=useGameStatus(rowsCleared);

	console.log('re-render!');

      //move tetronimo left and right  
	const movePlayer = dir => {
		if (!checkCollision(player, stage, {x: dir, y: 0})) {
			updatePlayerPos({x: dir, y: 0})
		}
	}

	const startGame = () => {
        console.log('start-game test')
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

	const pauseGame=()=>{
  		setTogglePause(!togglePause)
		  if(togglePause === true ){
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

		if (!checkCollision(player, stage, {x: 0, y: 1})) {
			updatePlayerPos({x: 0, y: 1, collided: false})
		} else {
			// Game Over!
			if (player.pos.y < 1) {
				console.log("it's all over now");
				setGameOver(true);
				setDropTime(null);
				setBtnText('Start Game')
				setTogglePause(true)
			}
			updatePlayerPos({x: 0, y: 0, collided: true});
		}
	}

	const keyUp = ({keyCode})=>{
		if(!gameOver){
			if(keyCode===40) {
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

	const move = ({keyCode}) => {
	
		if (!gameOver) {
			// left arrow
			if (keyCode === 37 ) {
				movePlayer(-1);
			// right arrow
			} else if (keyCode === 39) {
				movePlayer(1);
			// down arrow
			} else if (keyCode === 40) {
				dropPlayer();
				
            // up arrow      
			}else if (keyCode === 38) {
                playerRotate(stage, 1)
            }else if (keyCode === 32) {
				playerRotate(stage,1)
			}
		}
	}




	// custom hook by Dan Abramov ( starts interval )
	useInterval(()=>{
		drop()
	}, dropTime);

	return (
		
			
				<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
					<StyledTetris>
						<Stage stage={stage}/>
						<aside>
		                    {gameOver? (<Display gameOver={gameOver} text='Game Over' />) : (
							<div>
								<Display text="Score:" value={score} />
								<Display text="Rows:" value={rows} />
								<Display text="Level:" value={level} />
								<PauseButton state={togglePause}  callback ={pauseGame}/>
		                    </div>
		                    )}
							<StartButton text={btnText} callback={startGame} />
							
						</aside>

						{/* Mobile controls */}
						<StyledControlWrapper>
							<StyledMobileControls>
								{/* move left */}
								<StyledDirButton onClick={(e)=>movePlayer(-1)}><IoArrowBackOutline/></StyledDirButton>
								<div>
									<StyledDirButton></StyledDirButton>
									{/* move down  */}
									<StyledDirButton onTouchStart={()=>dropPlayer()} onClick={()=>setDropTime(1000 / (level + 1)) }><IoArrowDownOutline/></StyledDirButton>
								</div>
								{/* move right */}
								<StyledDirButton onClick={()=>movePlayer(1)}><IoArrowForwardOutline/></StyledDirButton>
								{/* rotate */}
								<StyledRotateButton onClick={()=>playerRotate(stage, 1)}><IoRefreshOutline/></StyledRotateButton>
							</StyledMobileControls>    
       					</StyledControlWrapper>

						
					</StyledTetris>
					
				</StyledTetrisWrapper>
		
		
	)
}

export default Tetris;