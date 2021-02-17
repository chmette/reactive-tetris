import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  align-self: center;
  font-size: 0.8rem;

  a {
    color: rgb(223, 173, 36);
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
//
