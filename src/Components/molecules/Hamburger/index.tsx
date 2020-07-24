import React from 'react'
import { StyledButton, StyledInnerBox, StyledOuterBox } from './index.styled'

const Hamburger = ()=> {
    return (
        <StyledButton aria-expanded="false">
            <StyledOuterBox>
                <StyledInnerBox></StyledInnerBox>
            </StyledOuterBox>
        </StyledButton>
    )
}

export default Hamburger
