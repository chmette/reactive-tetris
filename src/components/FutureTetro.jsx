import React from 'react';
import Cell from './Cell';
import StyledFutureTetro from './styles/StyledFutureTetro';

const FutureTetro = ({ futureTetro }) => {
	const tetro = futureTetro.tetromino;
	
	return (
		<StyledFutureTetro width={tetro.length} height={tetro[0].length}>
			<div>
				{tetro.length > 1 && tetro.map((row => row.map((cell, idx) => <Cell key={idx} type={cell[0]} />)))}
				
				{/* display the upcoming tetro */}
			</div>
		</StyledFutureTetro>
	)
}

export default FutureTetro;
