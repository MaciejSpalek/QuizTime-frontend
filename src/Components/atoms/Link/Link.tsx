import React from 'react';
import { StyledNavLink, StyledLink, activeStyle } from './Link.styled';
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
      <StyledNavLink data-testid="NavLink" exact activeStyle={activeStyle} to={to} onClick={onClick} {...props}>
        {children}
        {text}
      </StyledNavLink>
    )
  }

  return (
    <StyledLink data-testid="Link" to={to} onClick={onClick} {...props}>
      {children}
      {text}
    </StyledLink>
  )
}

export default Link;