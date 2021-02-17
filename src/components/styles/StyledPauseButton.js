import styled from "styled-components";

// because of the keyboard functionality of space (accept ) and enter (submit) to a button, we used a div in these place to prevent these.

export const StyledPauseButton = styled.div`
  box-sizing: border-box;
  padding: 1.1rem 0.8rem 1rem;
  margin: 0.2rem;
  border-radius: 1.2rem;
  border: 3px solid #333;
  color: #999;
  background: #030303;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;
  text-align: center;

  @media screen and (min-width: 600px) {
    width: 15ch;
    font-size: 0.8rem;
    margin: 1rem;
  }
`;
