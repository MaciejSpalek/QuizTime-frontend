import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledContainer = styled.div`
    ${FlexCenter};
    width: 100%;
    height: auto;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.grayscale[2]};
    padding:  10px;
`