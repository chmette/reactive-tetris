import styled from "styled-components";

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  padding: 1.5rem 1rem 1.2rem;
  border-radius: 1.2rem;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: 15ch;
  }
`;
