import React from 'react';
import { StyledAnchor } from './index.styled';

interface Props {
    href?: string;
    text: string;
}

const Anchor: React.FC<Props> = ({ text, href }) => {
    return (
        <StyledAnchor 
            href={href} 
            data-testid="anchor">
            {text}
        </StyledAnchor>
    )
}

export default Anchor