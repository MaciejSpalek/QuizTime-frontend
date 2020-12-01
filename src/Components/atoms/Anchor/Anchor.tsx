import React from 'react';
import { IAnchor } from './Anchor.model';
import { StyledAnchor } from './Anchor.styled';

const Anchor = ({ text, href }: IAnchor) => {
    return (
        <StyledAnchor href={href} >
            {text}
        </StyledAnchor>
    );
};

export default Anchor;