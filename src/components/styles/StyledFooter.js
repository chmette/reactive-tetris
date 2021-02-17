import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #000;
  color: #fff;
  height: 1.8rem;
  width: 100%;
  padding: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  align-self: center;
  font-size: 0.9rem;

  a {
    color: rgb(223, 173, 36);
    text-decoration: underline;
    font-weight: bold;
  }

  @media screen and (max-width: 600px);
   {
    font-size: 0.7rem;
    height: 1.5rem;
  }
`;
//
