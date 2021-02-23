import styled from "styled-components";

export const StyledMobileControls = styled.section`
	justify-self: stretch;
	display: flex;
	flex-direction: row;
	margin: 1rem 1rem 0 0;

	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	@media screen and (min-width: 350px) {
		grid-row: 3;
		grid-column: span 2;
	}

	@media screen and (max-height: 500px) {
		grid-row: 3 / 4;
		grid-column: span 2;
	}
`;

export const StyleMCStartStop = styled(StyledMobileControls)`
	margin-top: 1.5rem;
	padding-top: 0.3rem;
	justify-content: center;
	align-items: center;
	margin-right: 0rem;

	div {
		width: 14ch;
	}

	@media screen and (min-width: 350px) {
		grid-row: 2;
		grid-column: span 1;
		flex-direction: column;
		align-items: flex-end;
	}

	@media screen and (max-height: 500px) {
		grid-row: 2 / 3;
		grid-column: 2 / 3;
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
	border-radius: 50%;
	color: #000;
	background: #7d2625;
	outline: none;
	box-shadow: 0px 0px 2px 1px #999;
	margin-left: auto;
`;
