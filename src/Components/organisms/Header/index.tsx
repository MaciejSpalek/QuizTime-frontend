import React from 'react'
import { StyledContainer } from './index.styled'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

const Header = () => {
    return (
        <StyledContainer>
            <Heading />
            {/* <Paragraph text={`Znajdź coś dla siebie!`} isBold={false}/> */}
            {/* <Paragraph text={"Wystarczy mieć konto"} isBold={false}/> */}
        </StyledContainer>
    )
}

export default Header