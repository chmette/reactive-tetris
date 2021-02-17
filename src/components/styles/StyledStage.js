import styled from "styled-components";

export const StyledStage = styled.div`
	position: relative;
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    max(1.5rem, 3.5vmin)
  );
  grid-template-columns: repeat(${(props) => props.width}, max(1.5rem, 3.5vmin));
  grid-gap: 1px;
  border: 2px solid #333;
  background-color: #111;
`;
