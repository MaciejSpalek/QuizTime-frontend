import React from 'react';
import { StyledNavbar } from './Navbar.styled';
import Hamburger from 'Components/atoms/Hamburger/Hamburger';
import Logo from 'Components/atoms/Heading';
import Menu from 'Components/molecules/Menu/index';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Navbar = ()=> {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);

    return (
        <StyledNavbar>
            <Logo />
            <Hamburger />
            {hamburgerStatus && <Menu />}
        </StyledNavbar>
    );
};

export default Navbar;
