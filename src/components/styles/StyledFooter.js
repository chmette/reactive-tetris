import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #000;
  color: #999;
  width: 100%;
  padding: 0.5rem 1rem 0 1rem;
  text-align: center;
  align-self: center;
  font-size: 0.8rem;

  a {
    color: rgb(223, 173, 36);
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
