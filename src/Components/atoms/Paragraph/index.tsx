import React, { FC } from 'react'
import { StyledParagraph } from './index.styled'

type Props = {
    text: string;
    isBold: boolean;
    textAlign: string;
    isMessage: boolean;
}


const Paragraph: FC<Props> = ({text, isBold, textAlign, isMessage})=> {
    return (
        <StyledParagraph 
            isBold={isBold}
            isMessage={isMessage}
            textAlign={textAlign}>
            {text} 
        </StyledParagraph>
    )
}

export default Paragraph