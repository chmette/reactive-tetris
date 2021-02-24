import styled from "styled-components";
import bgImg from "../../img/bgimg.jpg";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  flex-grow: 1;
  background: url(${bgImg}) #000;
  background-size: cover;
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  padding: min(3vmin, 3rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  aside {
    width: 100%;
    padding: 0 0 0.5rem 0;
    order: -1;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;

      &:first-child {
        flex-grow: 1;
      }
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;

    aside {
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
