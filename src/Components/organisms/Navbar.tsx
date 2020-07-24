import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../../theme/Mixins'
import Hamburger from '../molecules/Hamburger/index'

const StyledNavbar = styled.nav`
    ${FlexCenter};
    justify-content: space-between;
    /* height: 50px; */
    padding: 5px;
    background-color: ${({theme}) => theme.colors.grayscale[1]};
    /* border: 1px solid black; */
`

const Navbar = ()=> {
    return (
        <StyledNavbar>
            <Hamburger />
        </StyledNavbar>
    )
}

export default Navbar
