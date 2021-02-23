import React from 'react'

//style and Icons 
import { IoArrowForwardOutline, IoArrowBackOutline, IoArrowDownOutline, IoRefreshOutline } from 'react-icons/io5';
import { StyledDirButton, StyleMCStartStop, StyledMobileControls, StyledRotateButton } from './styles/StyledMobileControls'


const MobileControls = (props) => {

    const {movePlayer, setDropTime, level, playerRotate, stage, togglePause, gameOver, setTogglePause} = props.currentAffairs;

	return (
		<>
			<StyledMobileControls>
	        	{/* move left */}
				<StyledDirButton  onTouchStart={() => movePlayer(-1)}>
	                <IoArrowBackOutline />
	            </StyledDirButton>
					
				<StyledDirButton disabled></StyledDirButton>
	                
				{/* move right */}
				<StyledDirButton onTouchStart={() => movePlayer(1)}>
	                <IoArrowForwardOutline />
	            </StyledDirButton>

				{/* move down  */}
				<StyledDirButton onTouchStart={() => {
	                setTogglePause(true);
	                setDropTime(50);
	            }} onTouchEnd={() => setDropTime(1000 / (level + 1))}>
	                <IoArrowDownOutline />
	            </StyledDirButton>
			</StyledMobileControls>
					
			{/* rotate */}
	        <StyledRotateButton onTouchStart={() => togglePause && !gameOver && playerRotate(stage, 1)}>
	            <IoRefreshOutline />
	        </StyledRotateButton>
	
	        {/*Start/Pause mobile view */}
	        <StyleMCStartStop>
	            {props.children}
	        </StyleMCStartStop>
		</>
	)
}

export default MobileControls
