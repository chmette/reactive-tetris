import React, {useState} from 'react';

 import {createStage, checkCollision} from '../gameHelpers';

import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

//Hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage';
import {useInterval} from '../hooks/useInterval'
import {useGameStatus} from '../hooks/useGameStatus'

//Components 
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';


const Tetris = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

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
	}

	const move = ({keyCode}) => {
		if (!gameOver) {
			// left arrow
			if (keyCode === 37) {
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
		                    </div>
		                    )}
							<StartButton callback={startGame} />
						</aside>
						
					</StyledTetris>
					
				</StyledTetrisWrapper>
		
		
	)
}

export default Tetris;