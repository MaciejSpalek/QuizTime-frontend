import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.grayscale[5]};
    padding: 10px;
`

export const StyledUserTag = styled.span`
    color: ${({theme}) => theme.colors.grayscale[2]};
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    margin-right: 30px;
`