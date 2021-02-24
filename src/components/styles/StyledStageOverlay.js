import styled from 'styled-components';

const StyledStageOverlay = styled.section`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	text-align: center;
	font-size: clamp(8.5vmin, 2.8rem, 15vmin);
	color: #999;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		padding: 1rem 0;
		color: #999;
		background-image: linear-gradient(rgb(80,227,230),rgb(132,61,198),rgb(255,51,204));
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
	}

	@media (min-width: 800px) {
		font-size: clamp(11vmin, 2.8rem, 15vmin);
	}
`

export default StyledStageOverlay;