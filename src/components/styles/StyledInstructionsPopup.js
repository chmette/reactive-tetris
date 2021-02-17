import styled from 'styled-components';

const StyledInstructionsPopup = styled.section`
	position: absolute;
	right: 0;
	max-width: 600px;
	margin: min(3vmin, 3rem);
	border: 2px dashed #999;
	padding: 2rem;
	background-color: #000000;
	color: #999999;

	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		h2 {
			margin-top: 0;
		}

		svg {
			width: 1.5rem;
			height: auto;
			cursor: pointer;
			fill: rgb(223, 173, 36);

			&:hover {
				fill: white;
			}
		}
	}

	div {
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 1rem;
		align-items: center;
	}
`

export default StyledInstructionsPopup;