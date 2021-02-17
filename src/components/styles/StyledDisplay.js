import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.7rem;
  border: 4px solid #333;
  width: max(15ch, 100%);
  border-radius: 1.2rem;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;

  @media screen and (min-width: 600px) {
    margin-bottom: 1.2rem;
    flex-direction: row;
    padding: 1.5rem 1rem 1.2rem;
    font-size: 0.8rem;
    span:nth-of-type(2) {
      margin-left: 1ch;
    }
  }
`;
