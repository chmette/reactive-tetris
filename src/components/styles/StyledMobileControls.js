import styled from "styled-components";

export const StyledMobileControls = styled.section`
	justify-self: start;
	margin: 1rem 1rem 0 0;
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-template-rows: repeat(2, auto);

	button:last-of-type {
		grid-column: 2 / 3;
	}
	@media (orientation: landscape) {
		grid-area: 2 / 1 / 3 / 2;
		margin: 1rem 0 0 1rem;
	}
`;

export const StyleMCStartStop = styled(StyledMobileControls)`
	grid-column: span 2;
	justify-self: center;
	margin-top: 1.5rem;
	padding-top: 0.3rem;
	justify-content: center;
	align-items: center;
	margin-right: 0rem;

	div {
		width: 14ch;
	}

	@media (orientation: landscape) {
		grid-area: 1 / 3 / 2 / 4;
		align-content: start;
		justify-self: end;
		margin: 0 1rem 0 0;
		grid-template: repeat(2, auto) / 1fr;
	}

`;

export const StyledDirButton = styled.button`
	box-sizing: border-box;
	height: 2.7rem;
	width: 2.7rem;
	border-radius: 0.2rem;
	border: none;
	color: black;
	background: #999;

	svg {
		width: 1.3rem;
		height: auto;
		margin-top: 2px;
	}
`;

export const StyledRotateButton = styled(StyledDirButton)`
	height: 3.5rem;
	width: 3.5rem;
	margin: 1rem 1rem 0 auto;
	border-radius: 50%;
	color: #000;
	background: #7d2625;
	outline: none;
	box-shadow: 0px 0px 2px 1px #999;
`;
