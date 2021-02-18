import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #000;
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
      stroke: #dfad25;

      path:last-child {
        fill: #dfad25;
      }
    }
  }
`;

export default StyledHeader;
