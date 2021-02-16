import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	background: #000;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 0.8rem;
	color: #999;
	padding: 1rem;

	h1 {
		margin: 0;
	}
	svg {
		width: 2rem;
		height: auto;
		cursor: pointer;
		
		&:hover {
			stroke: white;

			path:last-child {
				fill: white;
			}
		}
	}
`

export default StyledHeader;