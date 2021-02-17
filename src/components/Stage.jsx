import React from 'react';
import {StyledStage} from './styles/StyledStage';
import Cell from './Cell';
import StageOverlay from './StageOverlay';

const Stage = ({ stage, gameOver, notPaused, player }) => {
	
	return (
		// player.tetromino.length > 1
		
		<StyledStage width={stage[0].length} height={stage.length}>
			{gameOver && <StageOverlay text="game over"/>}
			{!(player.tetromino.length > 1) && <StageOverlay text="get ready"/>}
			{!notPaused && (player.tetromino.length > 1) && <StageOverlay text="paused"/>}
			{stage.map(row => row.map((cell, x) => 
				 <Cell key={x} type={cell[0]}/> 
			 ))} 
		</StyledStage>
	)
}

export default Stage;

