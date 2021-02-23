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
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  justify-items: center;

  aside {
    width: 100%;
    padding: 0 0 0.5rem 0;
    grid-area: 1 / 1 / 2 / 2;
    

    & > div {
      display: flex;

    }
  }

  @media screen and (min-width: 350px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto;

		aside {
			grid-row: 1;
			grid-column: span 2;
		}
	}

	@media screen and (max-height: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto;

		aside {
			grid-row: 1;
			grid-column: 2 / 3;
			& > div {
				flex-direction: column;

			}
		}
	}

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
    justify-items: initial;

    aside {
		grid-column: 2 / 3;
      flex-direction: column;
      padding: 0 max(1rem, 6vmin);
      order: 0;
      width: max-content;

      & > div {
        flex-direction: column;
        margin-top: 0.7rem;
      }
    }
  }
`;
