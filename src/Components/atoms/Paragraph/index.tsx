import React, { FC } from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
    isBold: boolean;
    textAlign: string;
}


const Paragraph: FC<Props> = ({text, isBold, textAlign})=> {
    return (
        <StyledParagraph 
            isBold={isBold}
            textAlign={textAlign}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph