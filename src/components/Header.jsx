import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import StyledHeader from './styles/StyledHeader';

const Header = ({onPopupHandle}) => {
	return (
		<StyledHeader>
			<h1>reactive tetris</h1>
			<IoInformationCircleOutline onClick={onPopupHandle} />
		</StyledHeader>

	)
}

export default Header;
