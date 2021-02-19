import React, { useRef } from 'react';
import { setHamburgerStatus } from 'redux/Actions/statusActions';
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
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.status.hamburgerStatus);
    const { loggedUser, isAuthenticated } = useSelector((state: RootState) => state.session);
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
        <StyledContainer aria-label="Menu">
            <StyledList ref={menuRef}>
                <StyledItem>
                    <StyledNavLink
                        text='Home'
                        to={routes.home}
                        isNavLink={true}
                        aria-label="Home"
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
                            aria-label="Log in"
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
                            text={`${loggedUser}`}
                            to={`/${loggedUser}`}
                            isNavLink={true}
                            aria-label="User profile"
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
                            aria-label="Log out"
                            onClick={() => {
                                handleOnClick();
                                logout();
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
