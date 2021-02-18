import styled from "styled-components";

export const StyledControlWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  padding: 0.5rem;
`;

export const StyledMobileControls = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StyleMCStartStop = styled(StyledMobileControls)`
  justify-content: center;
  align-items: center;
  div {
    width: 14ch;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
`;

export const StyledRotateButton = styled.button`
  box-sizing: border-box;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  border: none;
  color: #000;
  background: #7d2625;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 0px 2px 1px #999;
  margin-left: auto;
`;

//   @media screen and (min-width: 600px) {
//     width: 15ch;
