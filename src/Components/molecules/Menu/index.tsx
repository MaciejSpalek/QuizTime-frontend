import React from 'react'
import { css } from 'styled-components'
import { 
    StyledMenu, 
    StyledIcon
} from './index.style'
import { routes } from '../../../routes/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import { logout } from '../../../Auth/requests'
import { setHamburgerStatus } from '../../../redux/Actions/statusesActions'
import MenuItem from '../../atoms/Link/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavLinkStyles = css`
    color: ${({theme}) => theme.colors.grayscale[2]};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`

const Menu = ()=> {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated)
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus);

    const user = useSelector<RootState, string | null>(state => state.user.loggedUser)
    const dispatch = useDispatch()

    return (
        <StyledMenu>
            <MenuItem 
                to={routes.home}
                type="NavLink"
                text="Home"
                styles={NavLinkStyles}
                children={<StyledIcon icon='home' />}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            />
            {!isAuthenticated ? <MenuItem 
                to={routes.login}
                type="NavLink"
                text="Sign in"
                styles={NavLinkStyles}
                children={<StyledIcon icon='sign-in-alt'/>}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            /> : null}

            {isAuthenticated ? <MenuItem 
                to={`/${user}`}
                type="NavLink"
                text="Profile"
                styles={NavLinkStyles}
                children={<StyledIcon icon='user'/>}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            /> : null}

            {isAuthenticated ? <MenuItem 
                to={routes.home}
                type="NavLink"
                text="Logout"
                handleOnClick={()=> {
                    logout(dispatch); 
                    dispatch(setHamburgerStatus(!hamburgerStatus))
                }}
                styles={NavLinkStyles}
                children={<StyledIcon icon='sign-out-alt'/>}
            /> : null}
        </StyledMenu>
    )
}

export default Menu
