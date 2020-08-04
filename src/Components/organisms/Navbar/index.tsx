import React, { useState } from 'react'
import { StyledNavbar } from './index.styled'
import Hamburger from '../../molecules/Hamburger/index'
import Logo from '../../atoms/Heading'
import Menu from '../../molecules/Menu/index'


const Navbar = ()=> {
    const [ isMenuOpened, setMenuStatus ] = useState(false)
    const handleMenuStatus = (): void => {
        setMenuStatus(!isMenuOpened)
    }

    return (
        <StyledNavbar>
            <Logo />
            <Hamburger clickHandler={handleMenuStatus}/>
            {isMenuOpened ? <Menu /> : null}
        </StyledNavbar>
    )
}

export default Navbar
