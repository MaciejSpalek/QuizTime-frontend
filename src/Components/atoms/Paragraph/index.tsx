import React, { FC } from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
    isBold: boolean;
}


const Paragraph: FC<Props> = ({text, isBold})=> {
    return (
        <StyledParagraph isBold={isBold}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph