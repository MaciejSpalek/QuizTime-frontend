import React from 'react';
import { IParagraph } from './Paragraph.model';
import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({text, ...props}: IParagraph)=> {
    return (
        <StyledParagraph {...props}>
            {text} 
        </StyledParagraph>
    );
};

export default Paragraph;