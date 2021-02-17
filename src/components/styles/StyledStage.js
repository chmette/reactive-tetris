import styled from "styled-components";

export const StyledStage = styled.div`
	position: relative;
  display: grid;
  grid-template-rows: repeat(${(props) => props.height}, max(1.5rem, 3.5vmin));
  grid-template-columns: repeat(
    ${(props) => props.width},
    max(1.5rem, 3.5vmin)
  );
  grid-gap: 1px;
  border: 2px solid #333;
  background-color: #111;

  @media screen and (max-width: 600px) {
    grid-template-rows: repeat(${(props) => props.height}, max(1rem, 3vmin));
    grid-template-columns: repeat(${(props) => props.width}, max(1rem, 3vmin));
    grid-gap: 1px;
  }
`;

//  @media screen and (min-width: 600px) {
//     width: 15ch;
//   }
