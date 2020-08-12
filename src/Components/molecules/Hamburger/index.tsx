import React from 'react'
import { StyledButton, StyledInnerBox, StyledOuterBox } from './index.styled'

interface ToggleProps {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Hamburger:React.FC<ToggleProps> = ({ clickHandler })=> {
    return (
        <StyledButton aria-expanded="false" onClick={clickHandler}>
            <StyledOuterBox>
                <StyledInnerBox></StyledInnerBox>
            </StyledOuterBox>
        </StyledButton>
    )
}

export default Hamburger
