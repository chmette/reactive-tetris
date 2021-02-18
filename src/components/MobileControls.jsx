import React from 'react'
import { IoArrowForwardOutline, IoArrowBackOutline, IoArrowDownOutline, IoRefreshOutline } from 'react-icons/io5';
import { StyledDirButton, StyleMCStartStop, StyledControlWrapper, StyledMobileControls, StyledRotateButton } from './styles/StyledMobileControls'


const MobileControls = ({ movePlayer, dropPlayer, setDropTime, level, playerRotate, stage, children }) => {

	return (
		<StyledControlWrapper>
			<StyledMobileControls>
				
                {/* move left */}
				<StyledDirButton onClick={() => movePlayer(-1)}>
                    <IoArrowBackOutline />
                </StyledDirButton>
				
                {/* move down  */}
                <div>
					<StyledDirButton></StyledDirButton>
					<StyledDirButton onTouchStart={dropPlayer} onClick={() => setDropTime(1000 / (level + 1))}>
                        <IoArrowDownOutline />
                    </StyledDirButton>
				</div>
                
				{/* move right */}
				<StyledDirButton onClick={() => movePlayer(1)}>
                    <IoArrowForwardOutline />
                </StyledDirButton>			
			
				{/* rotate */}
                <StyledRotateButton onClick={() => playerRotate(stage, 1)}>
                    <IoRefreshOutline />
                </StyledRotateButton>

			</StyledMobileControls>

          {/*Start/Pause mobile view */}
            <StyleMCStartStop>
                {children}
            </StyleMCStartStop>
		</StyledControlWrapper>
	)
}

export default MobileControls
