import React from 'react';
import {StyledCell} from './styles/StyledCell';
import {TETROMINOS} from '../tetronimos';

const Cell = ({type}) => (
	<StyledCell type={type} color={TETROMINOS[type] ? TETROMINOS[type].color : "0, 0, 0"}>
	
	</StyledCell>
)


export default React.memo(Cell);
