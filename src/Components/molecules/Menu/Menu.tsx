import React, { useRef } from 'react';
import { setHamburgerStatus } from 'redux/Actions/statusesActions';
import { resetParameters } from 'helpers/reduxHandlers';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { useOutsideClick } from 'hooks';
import { logout } from 'services/auth';
import { routes } from 'routes/index';
import { useWindowSize } from 'hooks';
import {
    StyledIconWrapper,
    StyledBackground,
    StyledContainer,
    StyledNavLink,
    StyledList,
    StyledIcon,
    StyledItem,
    StyledSpan
} from './Menu.styled';


const Menu = () => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);
    const user = useSelector<RootState, string | null>(state => state.session.loggedUser);
    const menuRef = useRef<HTMLUListElement>(null);
    const dispatch = useDispatch();
    const width = useWindowSize();

    useOutsideClick(menuRef, () => {
        width <= 800 && dispatch(setHamburgerStatus(false));
    });

    const handleOnClick = () => {
        width <= 800 && dispatch(setHamburgerStatus(!hamburgerStatus));
        resetParameters(dispatch);
    };

    return (
        <StyledContainer>
            <StyledList ref={menuRef}>
                <StyledItem>
                    <StyledNavLink
                        text='Home'
                        to={routes.home}
                        isNavLink={true}
                        onClick={handleOnClick}>
                        <StyledIconWrapper>
                            <StyledIcon icon='home' />
                        </StyledIconWrapper>
                    </StyledNavLink>
                </StyledItem>
                {!isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            text='Log in'
                            isNavLink={true}
                            to={routes.login}
                            onClick={handleOnClick}>
                            <StyledIconWrapper>
                                <StyledIcon icon='sign-in-alt' />
                            </StyledIconWrapper>
                        </StyledNavLink>
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            text={`${user}`}
                            to={`/${user}`}
                            isNavLink={true}
                            onClick={handleOnClick}>
                            <StyledIconWrapper>
                                <StyledIcon icon='user' />
                            </StyledIconWrapper>
                        </StyledNavLink>
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            to={routes.home}
                            onClick={() => {
                                handleOnClick();
                                logout(dispatch);
                            }}>
                            <StyledIconWrapper>
                                <StyledIcon icon='sign-out-alt' />
                            </StyledIconWrapper>
                            <StyledSpan> Log out </StyledSpan>
                        </StyledNavLink>
                    </StyledItem>}
            </StyledList>
            <StyledBackground />
        </StyledContainer>
    );
};

export default Menu;
