import React from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import StyledHeader from './styles/StyledHeader';

const Header = () => {
	return (
		<StyledHeader>
			<h1>reactive tetris</h1>
			<IoInformationCircleOutline />
		</StyledHeader>
	)
}

export default Header;
