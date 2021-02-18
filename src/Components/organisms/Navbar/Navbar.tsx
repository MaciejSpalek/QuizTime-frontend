import React, { useCallback, useEffect } from 'react';
import Hamburger from 'Components/atoms/Hamburger/Hamburger';
import Menu from 'Components/molecules/Menu/Menu';
import Logo from 'Components/atoms/Logo';
import { setHamburgerStatus } from 'redux/Actions/statusActions';
import { StyledNavbar, StyledWrapper } from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useWindowSize } from 'hooks';

const Navbar = () => {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.status.hamburgerStatus);
    const dispatch = useDispatch();
    const width = useWindowSize();

    const handleHamburgerStatus = useCallback(() => {
        dispatch(setHamburgerStatus(width >= 800));
    }, [width, dispatch]);

    useEffect(() => {
        handleHamburgerStatus();
    }, [width, handleHamburgerStatus]);
    
    return (
        <StyledNavbar>
            <StyledWrapper>
                <Logo />
                {hamburgerStatus && <Menu />}
                <Hamburger />
            </StyledWrapper>
        </StyledNavbar>
    );
};

export default Navbar;
