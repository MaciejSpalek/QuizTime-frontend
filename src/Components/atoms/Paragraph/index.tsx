import React from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
    isBold: boolean;
    textAlign: string;
}


const Paragraph = ({text, isBold, textAlign, ...props}: Props)=> {
    return (
        <StyledParagraph 
            isBold={isBold}
            textAlign={textAlign}
            {...props}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph