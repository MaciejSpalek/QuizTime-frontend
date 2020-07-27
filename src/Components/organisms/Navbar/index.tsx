import React from 'react'
import { StyledNavbar } from './index.styled'
import Hamburger from '../../molecules/Hamburger/index'
import Heading from '../../atoms/Heading'

const Navbar = ()=> {
    return (
        <StyledNavbar>

            <Heading />
            <Hamburger />
        </StyledNavbar>
    )
}

export default Navbar
