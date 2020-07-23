import React from 'react'
import styled from 'styled-components'
import { FlexCenter } from '../../theme/Mixins'

const StyledNavbar = styled.nav`
    ${FlexCenter};
    height: 50px;
    padding: 5px;
    border: 1px solid black;
`

const Navbar = ()=> {
    return (
        <StyledNavbar>
            
        </StyledNavbar>
    )
}

export default Navbar
