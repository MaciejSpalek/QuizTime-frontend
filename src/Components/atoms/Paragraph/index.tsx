import React from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
    isBold: boolean;
    textAlign: string;
}


const Paragraph = ({text, isBold, textAlign}: Props)=> {
    return (
        <StyledParagraph 
            isBold={isBold}
            textAlign={textAlign}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph