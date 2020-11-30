import React, { useRef } from 'react'
import {
    StyledList,
    StyledIcon,
    StyledItem,
    StyledNavLink
} from './Menu.styled'
import { routes } from 'routes/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import { logout } from 'Auth/requests'
import { setHamburgerStatus } from 'redux/Actions/statusesActions'
import { useOutsideClick } from 'hooks'
import { resetParameters } from 'helpers/reduxHandlers'



const Menu = () => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const menuRef = useRef<HTMLUListElement>(null);
    const dispatch = useDispatch();

    useOutsideClick(menuRef, () => {
        dispatch(setHamburgerStatus(false));
    });

    const handleOnClick = () => {
        dispatch(setHamburgerStatus(!hamburgerStatus));
        resetParameters(dispatch);
    };

    return (
        <StyledList ref={menuRef}>
            <StyledItem>
                <StyledNavLink
                    to={routes.home}
                    type='NavLink'
                    text='Home'
                    children={<StyledIcon icon='home' />}
                    onClick={handleOnClick}
                />
            </StyledItem>
            {!isAuthenticated &&
                <StyledItem>
                    <StyledNavLink
                        to={routes.login}
                        type='NavLink'
                        text='Sign in'
                        children={<StyledIcon icon='sign-in-alt' />}
                        onClick={handleOnClick}
                    />
                </StyledItem>}
            {isAuthenticated &&
                <StyledItem>
                    <StyledNavLink
                        to={`/${user}`}
                        type='NavLink'
                        text='Profile'
                        children={<StyledIcon icon='user' />}
                        onClick={handleOnClick}
                    />
                </StyledItem>}
            {isAuthenticated &&
                <StyledItem>
                    <StyledNavLink
                        to={routes.home}
                        type='NavLink'
                        text='Logout'
                        children={<StyledIcon icon='sign-out-alt' />}
                        onClick={() => {
                            logout(dispatch);
                            handleOnClick();
                        }}
                    />
                </StyledItem>}
        </StyledList>
    );
};

export default Menu
