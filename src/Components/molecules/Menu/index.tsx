import React from 'react'
import { css } from 'styled-components'
import { StyledMenu } from './index.style'
import { routes } from '../../../routes/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import { logout } from '../../../Auth/requests'
import { setHamburgerStatus } from '../../../redux/Actions/statusesActions'
import MenuItem from '../../atoms/Link/index'
import Image from '../../atoms/Image/index'
import HomeSVG from '../../../assets/Home.svg'
import LoginSVG from '../../../assets/Login.svg'
import LogoutSVG from '../../../assets/Logout.svg'
import UserSVG from '../../../assets/User.svg'

const HomeIcon = () => <Image 
    url={HomeSVG}
    alt="Homepage icon"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const LoginIcon = () => <Image 
    url={LoginSVG}
    alt="Login icon"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const LogoutIcon = () => <Image 
    url={LogoutSVG}
    alt="Logout icon"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const UserIcon = () => <Image 
    url={UserSVG}
    alt="User icon"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

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
                children={<HomeIcon />}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            />
            {!isAuthenticated ? <MenuItem 
                to={routes.login}
                type="NavLink"
                text="Sign in"
                styles={NavLinkStyles}
                children={<LoginIcon />}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            /> : null}

            {isAuthenticated ? <MenuItem 
                to={`/${user}`}
                type="NavLink"
                text="Profile"
                styles={NavLinkStyles}
                children={<UserIcon />}
                handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}
            /> : null}

            {isAuthenticated ? <MenuItem 
                to={routes.home}
                type="NavLink"
                text="Logout"
                handleOnClick={()=> {logout(dispatch); dispatch(setHamburgerStatus(!hamburgerStatus))}}
                styles={NavLinkStyles}
                children={<LogoutIcon />}
            /> : null}
        </StyledMenu>
    )
}

export default Menu
