import React from 'react'
import {StyledPauseButton} from './styles/StyledPauseButton'

const PauseButton = ({state,callback, mobile, player}) => {
    // console.log(player.tetromino);
   const pauseText = mobile ? 'Pause' : 'Pause Game '

   const fadeText = player.tetromino.length === 1;

    return (
    
            <StyledPauseButton fadeText={fadeText}  onClick={callback}>
                {state ? pauseText: 'Continue'}
            </StyledPauseButton>
        
    )
}

export default PauseButton
