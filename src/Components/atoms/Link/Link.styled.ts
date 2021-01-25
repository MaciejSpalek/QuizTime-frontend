import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { FlexCenter } from 'styles/Mixins';
import colors from 'styles/Colors';

export const activeStyle = {
  'color': `${colors.BasicGreen}`
};

const styles = css`
  ${FlexCenter};
  justify-content: flex-start;
  flex-direction: row;
  color: ${colors.Gray20};
  font-size: 16px;
  font-weight: bold;
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