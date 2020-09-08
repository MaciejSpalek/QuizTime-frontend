import React from 'react'
import { StyledNavbar } from './index.styled'
import Hamburger from '../../molecules/Hamburger/index'
import Logo from '../../atoms/Heading'
import Menu from '../../molecules/Menu/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setHamburgerStatus } from '../../../redux/Actions/statusesActions'

const Navbar = ()=> {
    const hamburgerStatus = useSelector<RootState, boolean>(state => state.statuses.hamburgerStatus)
    const dispatch = useDispatch()

    return (
        <StyledNavbar>
            <Logo />
            <Hamburger handleOnClick={()=>dispatch(setHamburgerStatus(!hamburgerStatus))}/>
            {hamburgerStatus ? <Menu /> : null}
        </StyledNavbar>
    )
}

export default Navbar
