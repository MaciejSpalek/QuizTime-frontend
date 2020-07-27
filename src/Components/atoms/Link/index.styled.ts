import styled, { css } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const styles = css`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-decoration: none;
  color: white;
  cursor: pointer;
`

export const StyledNavLink = styled(NavLink)<{extraStyles: any}>`
  ${styles};
  ${({ extraStyles })=> extraStyles};
`

export const StyledLink = styled(Link)<{extraStyles: any}>`
  ${styles};
  ${({ extraStyles })=> extraStyles};
`