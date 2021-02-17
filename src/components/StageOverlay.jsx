import React from 'react';
import StyledStageOverlay from './styles/StyledStageOverlay';

const StageOverlay = ({text}) => {
	return (
		<StyledStageOverlay>
			<span>{text}</span>
		</StyledStageOverlay>
	)
}

export default StageOverlay;
