import React from 'react'

//style and Icons 
import { IoArrowForwardOutline, IoArrowBackOutline, IoArrowDownOutline, IoRefreshOutline } from 'react-icons/io5';
import { StyledDirButton, StyleMCStartStop, StyledControlWrapper, StyledMobileControls, StyledRotateButton } from './styles/StyledMobileControls'

// hook 
import useLongPress from "../hooks/useLongPress";


const MobileControls = ({ movePlayer, dropPlayer, setDropTime, level, playerRotate, stage, children }) => {

    



   const arrowDownLongPress = useLongPress({dropPlayer},
    500
  );

     console.log('intervalFunction:',arrowDownLongPress)

 // {...arrowDownLongPress}onTouchStart={dropPlayer}


	return (
		<StyledControlWrapper>
			<StyledMobileControls>
				
                {/* move left */}
				<StyledDirButton  onTouchStart={() => movePlayer(-1)}>
                    <IoArrowBackOutline />
                </StyledDirButton>
				
                {/* move down  */}
                <div>
					<StyledDirButton disabled></StyledDirButton>
					<StyledDirButton  {...arrowDownLongPress}   onClick={() => setDropTime(1000 / (level + 1))}>
                        <IoArrowDownOutline />
                    </StyledDirButton>
				</div>
                
				{/* move right */}
				<StyledDirButton onTouchStart={() => movePlayer(1)}>
                    <IoArrowForwardOutline />
                </StyledDirButton>			
			
				{/* rotate */}
                <StyledRotateButton onTouchStart={() => playerRotate(stage, 1)}>
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
