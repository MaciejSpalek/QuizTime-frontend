import React from 'react'
import { StyledNavbar } from './index.styled'
import Hamburger from '../../molecules/Hamburger/index'
import Image from '../../atoms/Image/index'
import Logo from '../../../assets/LogoImage.svg'

const Navbar = ()=> {
    return (
        <StyledNavbar>
            <Image 
                url={Logo}
                width={"30px"}
                height={"30px"}    
                alt={"Logo"}
            />
            <Hamburger />
        </StyledNavbar>
    )
}

export default Navbar
