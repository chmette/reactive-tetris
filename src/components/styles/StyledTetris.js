import styled from "styled-components";
import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 95vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  display: flex;

  aside {
    width: 100%;
    grid-area: 1/2 / 2/3;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
