import React from 'react';
import {IoArrowForwardOutline, IoArrowBackOutline, IoArrowDownOutline, IoArrowUpOutline, IoRefreshOutline, IoClose} from 'react-icons/io5';
import StyledInstructionsPopup from './styles/StyledInstructionsPopup';

const InstructionsPopup = ({onPopupHandle}) => {
	return (
		<StyledInstructionsPopup>
			<header>
				<h2>How to play</h2>
				<IoClose onClick={onPopupHandle}/>
			</header>
			<p>Bring down blocks (tetrominos) from the top of the screen. You can move the blocks left and right and also rotate them clockwise.</p>
			<p>Your objective is to get tetrominos to fill all the empty cells in horizontal lines; whenever you do this, the blocks vanish and you earn points.</p>
			<p>More points == higher levels == higher speed == greater difficulty.</p>
			<div>
				<span><IoArrowForwardOutline/></span>
				<span>move right</span>
				<span><IoArrowBackOutline/></span>
				<span>move left</span>
				<span><IoArrowDownOutline/></span>
				<span>drop</span>
				<span><IoArrowUpOutline/>|<IoRefreshOutline/></span>
				<span>rotate clockwise</span>
			</div>
		</StyledInstructionsPopup>
	)
}

export default InstructionsPopup;
