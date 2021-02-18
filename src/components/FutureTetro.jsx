import React from 'react';
import Cell from './Cell';
import StyledFutureTetro from './styles/StyledFutureTetro';

const FutureTetro = ({ futureTetro }) => {
	const tetro = futureTetro.tetromino;
	const hasGameStarted = tetro.length > 1;
	
	return (
		<StyledFutureTetro width={tetro.length} height={tetro[0].length}>
			<div>
				{hasGameStarted && tetro.map((row => row.map((cell, idx) => <Cell key={idx} type={cell[0]} />)))}
			</div>
		</StyledFutureTetro>
	)
}

export default FutureTetro;
