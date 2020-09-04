import React from 'react'
import { StyledButton, StyledInnerBox, StyledOuterBox } from './index.styled'

interface ToggleProps {
    handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Hamburger:React.FC<ToggleProps> = ({ handleOnClick })=> {
    return (
        <StyledButton aria-expanded="false" onClick={handleOnClick}>
            <StyledOuterBox>
                <StyledInnerBox></StyledInnerBox>
            </StyledOuterBox>
        </StyledButton>
    )
}

export default Hamburger
