import React from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
}


const Paragraph = ({text, ...props}: Props)=> {
    return (
        <StyledParagraph {...props}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph