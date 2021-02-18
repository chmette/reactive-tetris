import styled from "styled-components";

// because of the keyboard functionality of space (accept ) and enter (submit) to a button, we used a div in these place to prevent these.

export const StyledPauseButton = styled.div`
  box-sizing: border-box;
  padding: 1.1rem 0.8rem 1rem;
  margin: 0.2rem;
  border-radius: 1.2rem;
  border: 2px solid #333;
  color: ${(props) => (props.gameStarted ? "white" : "#999")};
  background: #030303;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 0.8rem;
    padding: 1.5rem 1rem 1.2rem;
    margin: max(0.2rem, 1vw) 0 0 0;
    color: ${(props) => (props.fadeText ? "#999" : "white")};
  }
`;
