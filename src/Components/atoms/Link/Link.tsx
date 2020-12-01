import React from 'react';
import { StyledNavLink,  StyledLink } from './Link.styled';
import { ILink } from './Link.model';

const Link = ({ 
  to, 
  type, 
  text, 
  onClick,
  children, 
  ...props
}: ILink) => {
  if (type === 'NavLink') {
    return (
        <StyledNavLink to={to} onClick={onClick} {...props}>
            {children}
            {text} 
        </StyledNavLink>
    )
  } else {
    return (
        <StyledLink to={to} onClick={onClick} {...props}>
            {children}
            {text}
        </StyledLink>
    )
  } 
}

export default Link;