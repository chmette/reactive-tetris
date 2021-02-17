import styled from 'styled-components';

const StyledStageOverlay = styled.section`
	position: absolute;
	width: 100%;
	height: 100%;
	height: -moz-available;
	height: -webkit-fill-available;
	height: fill-available;
	background-color: rgba(0, 0, 0, 0.7);
	text-align: center;
	font-size: 2.9rem;
	color: #999;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		color: #999;
		background-image: linear-gradient(rgb(80, 227, 230), rgb(36, 95, 223), rgb(255, 51, 204), rgb(223, 217, 36), rgb(48, 211, 56), rgb(132, 61, 198), rgb(227, 78, 78));
		background-image: linear-gradient(rgb(36, 95, 223), rgb(255, 51, 204), rgb(223, 217, 36), rgb(48, 211, 56));
		color: transparent;
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
	}
`

export default StyledStageOverlay;