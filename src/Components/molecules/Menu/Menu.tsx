import React, { useRef } from 'react';
import { routes } from 'routes/index';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { logout } from 'Auth/requests';
import { setHamburgerStatus } from 'redux/Actions/statusesActions';
import { useOutsideClick } from 'hooks';
import { resetParameters } from 'helpers/reduxHandlers';
import { useWindowSize } from 'hooks';
import {
    StyledList,
    StyledIcon,
    StyledItem,
    StyledNavLink,
    StyledBackground,
    StyledContainer
} from './Menu.styled';
import { StyledLink } from 'Components/atoms/Link/Link.styled';
import Paragraph from 'Components/atoms/Paragraph';


const Menu = () => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser);
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
                        to={routes.home}
                        isNavLink={true}
                        text='Home'
                        children={<StyledIcon icon='home' />}
                        onClick={handleOnClick}
                    />
                </StyledItem>
                {!isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            to={routes.login}
                            isNavLink={true}
                            text='Sign in'
                            children={<StyledIcon icon='sign-in-alt' />}
                            onClick={handleOnClick}
                        />
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledNavLink
                            to={`/${user}`}
                            isNavLink={true}
                            text='Profile'
                            children={<StyledIcon icon='user' />}
                            onClick={handleOnClick}
                        />
                    </StyledItem>}
                {isAuthenticated &&
                    <StyledItem>
                        <StyledLink
                            to={routes.home}
                            onClick={() => {
                                handleOnClick();
                                logout(dispatch);
                            }}
                        >
                            <StyledIcon icon='sign-out-alt' />
                            <span> Log out </span>
                        </StyledLink>
                    </StyledItem>}
            </StyledList>
            <StyledBackground />
        </StyledContainer>
    );
};

export default Menu;
