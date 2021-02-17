import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 max(0.2rem, 1vw) 0;
  width: max(15ch, 100%);
  padding: 0.5rem 0.7rem 0.1rem 0.7rem;
  border: 4px solid #333;
  border-radius: 1.2rem;
  color: ${(props) => (props.gameOver ? "red" : "#999")};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.7rem;

  @media screen and (min-width: 600px) {
    margin: 0 0 max(0.2rem, 1vw) 0;
    flex-direction: row;
    padding: 1.5rem 1rem 1.2rem;
    font-size: 0.8rem;

    span:nth-of-type(2) {
      margin-left: 1ch;
    }
  }
`;
