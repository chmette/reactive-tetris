import React from 'react'
import {StyledPauseButton} from './styles/StyledPauseButton'

const PauseButton = ({state,callback, mobile}) => {

   const pauseText = mobile ? 'Pause' : 'Pause Game '

    return (
       
            <StyledPauseButton  onClick={callback}>
                {state ? pauseText: 'Continue'}
            </StyledPauseButton>
        
    )
}

export default PauseButton
