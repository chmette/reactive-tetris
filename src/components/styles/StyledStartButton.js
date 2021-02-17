import styled from "styled-components";

// because of the keyboard functionality of space (accept ) and enter (submit) to a button, we used a div in these place to prevent these.

export const StyledStartButton = styled.div`
  box-sizing: border-box;
  padding: 1.1rem 0.8rem 1rem;
  border-radius: 1.2rem;
  border: 2px solid #333;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;
  text-align: center;
  margin: 0.2rem;

  @media screen and (min-width: 600px) {
    width: 15ch;
    font-size: 1rem;
    padding: 1.5rem 1rem 1.2rem;
  }
`;
