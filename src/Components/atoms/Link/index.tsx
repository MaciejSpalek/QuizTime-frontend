import React from 'react';
import { StyledNavLink,  StyledLink } from './index.styled';

interface Props {
    to: string;
    type: string;
    text: string;
    extraStyles?: any
}

const Link: React.FC<Props> = ({ type, text, to, extraStyles }) => {
  if (type === "NavLink") {
    return (
        <StyledNavLink to={to} extraStyles={extraStyles}>
            {text}
        </StyledNavLink>
    )
  } else {
    return (
        <StyledLink to={to} extraStyles={extraStyles}>
            {text}
        </StyledLink>
    )
  } 
}

export default Link