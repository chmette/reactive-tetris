import styled from "styled-components";

export const StyledStage = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${(props) => props.height}, max(1rem, 3vmin));
  grid-template-columns: repeat(${(props) => props.width}, max(1rem, 3vmin));
  grid-gap: 1px;
  border: 2px solid #333;
  background-color: #111;
  
  @media screen and (min-width: 350px) {
	grid-row: 2;
	grid-template-rows: repeat(${(props) => props.height}, 5vmin);
	grid-template-columns: repeat(${(props) => props.width}, 5vmin);
}

@media screen and (max-height: 500px) {
	grid-row: span 2;
}
  @media screen and (min-width: 600px) {
    grid-template-rows: repeat(${(props) => props.height}, max(1.5rem, 3.5vmin));
    grid-template-columns: repeat(${(props) => props.width}, max(1.5rem, 3.5vmin));
    grid-row: 1;
	justify-self: center;
  }

  @media screen (min-width: 600px) and (max-height: 600px) {
    grid-template-rows: repeat(${(props) => props.height}, 3.5vmin);
    grid-template-columns: repeat(${(props) => props.width}, 3.5vmin);
    grid-row: 1;
	justify-self: center;
	align-self: center;
  }

`;
