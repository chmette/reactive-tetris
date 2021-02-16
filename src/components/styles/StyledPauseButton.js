import styled from "styled-components";

export const StyledPauseButton = styled.button`
  box-sizing: border-box;
  padding: 1.1rem 0.8rem 1rem;
  margin: 1rem auto;
  border-radius: 1.2rem;
  border: 3px solid #333;
  color: #999;
  background: #030303;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: 15ch;
  }
`;