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
  margin-right: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StyleMCStartStop = styled(StyledMobileControls)`
  margin-top: 1.5rem;
  padding-top: 0.3rem;
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
