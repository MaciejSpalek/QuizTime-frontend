import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { FlexCenter } from 'styles/Mixins';

const styles = css`
  ${FlexCenter};
  justify-content: flex-start;
  font-size: 16px;
  text-decoration: none;
  margin: 10px 0;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  ${styles};
`;

export const StyledLink = styled(Link)`
  ${styles};
`;