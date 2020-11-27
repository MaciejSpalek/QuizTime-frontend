import React from 'react';
import { StyledNavLink,  StyledLink } from './index.styled';

type Props = {
  to: string;
  styles?: any;
  type: string;
  text?: string;
  handleOnClick?: any;
  children?: React.ReactNode;
}

const Link = ({ 
  type, 
  text, 
  to, 
  styles, 
  children, 
  handleOnClick
}: Props) => {
  if (type === "NavLink") {
    return (
        <StyledNavLink to={to} cssstyles={styles} onClick={handleOnClick}>
            {children}
            {text} 
        </StyledNavLink>
    )
  } else {
    return (
        <StyledLink to={to} cssstyles={styles} onClick={handleOnClick}>
            {children}
            {text}
        </StyledLink>
    )
  } 
}

export default Link