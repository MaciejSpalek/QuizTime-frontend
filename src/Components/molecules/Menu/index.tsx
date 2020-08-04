import React from 'react'
import {css} from 'styled-components'
import MenuItem from '../../atoms/Link/index'
import Image from '../../atoms/Image/index'
import HomeSVG from '../../../assets/Home.svg'
import LoginSVG from '../../../assets/Login.svg'
import { StyledMenu } from './index.style'

const HomeIcon = () => <Image 
    url={HomeSVG}
    alt="IkonaStrona główna"
    width="40px"
    height="40px"
    margin="0 10px 0 0"
/>

const LoginIcon = () => <Image 
    url={LoginSVG}
    alt="Ikona logowania"
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
                to="/"
                type="NavLink"
                text="Główna"
                styles={NavLinkStyles}
                children={<HomeIcon />}
            />
            <MenuItem 
                to="/logowanie"
                type="NavLink"
                text="Logowanie"
                styles={NavLinkStyles}
                children={<LoginIcon />}
            />
        </StyledMenu>
    )
}

export default Menu
