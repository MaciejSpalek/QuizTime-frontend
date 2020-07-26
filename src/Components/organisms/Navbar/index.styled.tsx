import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledNavbar = styled.nav`
    ${FlexCenter};
    justify-content: space-between;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.grayscale[1]};
`