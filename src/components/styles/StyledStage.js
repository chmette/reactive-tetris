import styled from "styled-components";

export const StyledStage = styled.div`
	position: relative;
	grid-column: span 2;
	align-self: start;
	display: grid;
	grid-template-rows: repeat(${(props) => props.height}, max(1rem, 3vmin));
	grid-template-columns: repeat(${(props) => props.width}, max(1rem, 3vmin));
	grid-gap: 1px;
	border: 2px solid #333;
	background-color: #111;

	@media (orientation: landscape) {
		grid-template-rows: repeat(${(props) => props.height}, 4vmin);
		grid-template-columns: repeat(${(props) => props.width}, 4vmin);
		grid-area: 1 / 2 / 4 / 3;
	}

`;
