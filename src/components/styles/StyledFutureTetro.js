import styled from "styled-components";

const StyledFutureTetro = styled.section`
	background-color: #000;
	border: 2px solid #333;
	border-radius: 1.2rem;
	width: 100%;
	height: max(6rem, 15vmin);
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		display: grid;
		grid-template-rows: repeat(${(props) => props.height},max(1.5rem, 3.5vmin));
		grid-template-columns: repeat(${(props) => props.width}, max(1.5rem, 3.5vmin));
		grid-gap: 1px;
	}

	@media (orientation: landscape) {
	grid-area: 1 / 3 / 2 / 4;
	margin: 0.2rem 1rem 0 1rem;
	width: calc(100% - 2rem);
}
`;

export default StyledFutureTetro;
