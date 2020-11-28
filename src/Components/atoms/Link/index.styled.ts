import styled, { css } from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { FlexCenter } from '../../../styles/Mixins'

const styles = css`
  ${FlexCenter};
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.fontWeights.white};
  text-decoration: none;
  margin: 10px 0;
  cursor: pointer;
`

export const StyledNavLink = styled(NavLink)<{cssstyles: any}>`
  ${styles};
  ${({ cssstyles }) => cssstyles};
`

export const StyledLink = styled(Link)<{cssstyles: any}>`
  ${styles};
  ${({ cssstyles }) => cssstyles};
`