import React from 'react'
import { css } from 'styled-components'
import { StyledMenu } from './index.style'
import { routes } from '../../../routes/index'
import MenuItem from '../../atoms/Link/index'
import Image from '../../atoms/Image/index'
import HomeSVG from '../../../assets/Home.svg'
import LoginSVG from '../../../assets/Login.svg'

const HomeIcon = () => <Image 
    url={HomeSVG}
    alt="IkonaStrona główna"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const LoginIcon = () => <Image 
    url={LoginSVG}
    alt="Login Icon"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const NavLinkStyles = css`
    color: ${({theme}) => theme.colors.grayscale[2]};
    font-weight: ${({theme}) => theme.fontWeights.bold};
`

const Menu = ()=> {
    return (
        <StyledMenu>
            <MenuItem 
                to={ routes.home }
                type="NavLink"
                text="Home"
                styles={NavLinkStyles}
                children={<HomeIcon />}
            />
            <MenuItem 
                to={ routes.login }
                type="NavLink"
                text="Sign in"
                styles={NavLinkStyles}
                children={<LoginIcon />}
            />
        </StyledMenu>
    )
}

export default Menu
