import styled from "styled-components";

export const StyledControlWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  margin: 1.5rem;
  padding: 0.5rem;
`;

export const StyledMobileControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 98%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

// export const StyledMobileColumn = styled.div`

// `;

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
  outline: none;
  cursor: pointer;
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
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0px 0px 2px 1px #999;
`;

//   @media screen and (min-width: 600px) {
//     width: 15ch;
