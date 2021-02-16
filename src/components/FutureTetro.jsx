import React from 'react';
import Cell from './Cell';
import StyledFutureTetro from './styles/StyledFutureTetro';

const FutureTetro = ({player}) => {
	const width = 4;
	const height = 4;
	console.log(player);
    return (
        <StyledFutureTetro width={player.tetromino.length} height={player.tetromino[0].length}>
           <div>
           	 {/* display an empty stage: width and height as the largest tetro */}
				{player.tetromino.length > 1 && player.tetromino.map((row => row.map((cell, idx) => <Cell key={idx} type={cell[0]}/>) ))}
				{/* display cells allowing them to change the type */}
				{/* display the upcoming tetro */}
           </div>
        </StyledFutureTetro>
    )
}

export default FutureTetro;
