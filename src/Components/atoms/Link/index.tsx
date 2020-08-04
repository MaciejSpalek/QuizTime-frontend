import React from 'react';
import { StyledNavLink,  StyledLink } from './index.styled';

interface Props {
    to: string;
    type: string;
    text?: string;
    styles?: any;
    children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ type, text, to, styles, children}) => {
  if (type === "NavLink") {
    return (
        <StyledNavLink to={to} cssstyles={styles}>
            {children}
            {text} 
        </StyledNavLink>
    )
  } else {
    return (
        <StyledLink to={to} cssstyles={styles}>
            {children}
            {text}
        </StyledLink>
    )
  } 
}

export default Link