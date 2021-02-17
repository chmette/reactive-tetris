import styled from "styled-components";

// because of the keyboard functionality of space (accept ) and enter (submit) to a button, we used a div in these place to prevent these.

export const StyledStartButton = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 1rem 1.2rem;
  border-radius: 1.2rem;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  text-align: center;

  @media screen and (min-width: 600px) {
    width: 15ch;
    font-size: 1rem;
  }
`;
