import React from 'react';
import { StyledAnchor } from './index.styled';

type Props = {
    href?: string;
    text: string;
}

const Anchor = ({ text, href }: Props) => {
    return (
        <StyledAnchor 
            href={href} 
            data-testid="anchor">
            {text}
        </StyledAnchor>
    )
}

export default Anchor