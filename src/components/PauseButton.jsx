import React from 'react'
import {StyledPauseButton} from './styles/StyledPauseButton'

const PauseButton = ({state,callback, mobile, gameStarted}) => {
   const pauseText = mobile ? 'Pause' : 'Pause Game';

    return (
        <StyledPauseButton gameStarted={gameStarted}  onClick={callback}>
            {state ? pauseText: 'Continue'}
        </StyledPauseButton>
    )
}

export default PauseButton
