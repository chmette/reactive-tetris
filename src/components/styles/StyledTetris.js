import styled from "styled-components";
import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  padding: min(3vmin, 3rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  aside {
    padding: 0 0 max(1rem, 3vmin) 0;
    order: -1;
    display: flex;

    & > div {
      display: flex;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;

    aside {
      flex-direction: column;
      padding: 0 max(1rem, 6vmin);
      order: 0;

      & > div {
        flex-direction: column;
        margin-top: 0.7rem;
      }
    }
  }
`;
