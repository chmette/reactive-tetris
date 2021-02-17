import React from 'react'
import {StyledPauseButton} from './styles/StyledPauseButton'

const PauseButton = ({state,callback}) => {
    return (
       
            <StyledPauseButton onClick={callback}>
                {state ? 'Pause Game': 'Continue'}
            </StyledPauseButton>
        
    )
}

export default PauseButton
