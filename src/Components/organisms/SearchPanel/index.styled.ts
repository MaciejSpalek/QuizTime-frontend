import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.white};
    border-bottom: 1px solid ${({theme}) => theme.colors.grayscale[5]};
    padding: 10px;
`