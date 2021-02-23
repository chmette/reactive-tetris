import styled from "styled-components";
import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	flex-grow: 1;
	background: url(${bgImage}) #000;
	background-size: cover;
	overflow: hidden;
	outline: none;
`;

export const StyledTetris = styled.div`
	padding: min(3vmin, 3rem);
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, auto);
	justify-items: center;

	aside {
		width: 100%;
		padding: 0 0 0.5rem 0;
		grid-area: 1 / 1 / 2 / 3;
		

		& > div {
			display: flex;

		}
	}

	@media (orientation: landscape) {
		grid-template-rows: 1fr auto;
		grid-template-columns: repeat(3, 1fr);

		aside {
			grid-area: 1 / 1 / 2 / 2;
			
			& > div {
				flex-direction: column;
				align-items: start;

				& > div {
					margin: 0.2rem 0.2rem 0.2rem 1rem;
				}
			}
		}
	}

	
`;
