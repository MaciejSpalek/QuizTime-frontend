import React from 'react'
import { StyledButton, StyledInnerBox, StyledOuterBox } from './index.styled'

type Props = {
    handleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Hamburger = ({ handleOnClick }: Props)=> {
    return (
        <StyledButton aria-expanded="false" onClick={handleOnClick}>
            <StyledOuterBox>
                <StyledInnerBox></StyledInnerBox>
            </StyledOuterBox>
        </StyledButton>
    )
}

export default Hamburger
