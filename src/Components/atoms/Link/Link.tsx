import React from 'react';
import { StyledNavLink,  StyledLink, activeStyle } from './Link.styled';
import { ILink } from './Link.model';

const Link = ({ 
  to, 
  text, 
  onClick,
  children, 
  isNavLink, 
  ...props
}: ILink) => {
  if (isNavLink) {
    return (
        <StyledNavLink exact activeStyle={activeStyle} to={to} onClick={onClick} {...props}>
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