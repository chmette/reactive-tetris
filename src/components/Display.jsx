import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'

const Display = ({gameOver, text, value}) => (
    <StyledDisplay gameOver={gameOver}>
		<span>{text}</span>
		<span>{value}</span>
	</StyledDisplay>
)

export default Display
