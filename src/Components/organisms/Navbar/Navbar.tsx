import React, { useCallback, useEffect } from 'react';
import Hamburger from 'Components/atoms/Hamburger/Hamburger';
import Logo from 'Components/atoms/Logo';
import Menu from 'Components/molecules/Menu/Menu';
import { StyledNavbar } from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useWindowSize } from 'hooks';
import { setHamburgerStatus } from 'redux/Actions/statusesActions';

const Navbar = () => {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);
    const dispatch = useDispatch();
    const width = useWindowSize();

    const handleHamburgerStatus = useCallback(() => {
        if (width >= 800) {
            dispatch(setHamburgerStatus(true));
        } else {
            dispatch(setHamburgerStatus(false));
        }
    }, [width, dispatch]);

    useEffect(() => {
        handleHamburgerStatus();
    }, [width, handleHamburgerStatus]);

    return (
        <StyledNavbar>
            <Logo />
            {hamburgerStatus && <Menu />}
            <Hamburger />
        </StyledNavbar>
    );
};

export default Navbar;
