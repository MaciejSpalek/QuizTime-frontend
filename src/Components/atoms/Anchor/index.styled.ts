import styled, { css } from 'styled-components'

const styles = css`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-decoration: none;
  color: white;
  cursor: pointer;
`

export const StyledAnchor = styled.a`
  ${styles}
  display: inline-block;
  width: 100%;
  line-height: 3rem;
`
