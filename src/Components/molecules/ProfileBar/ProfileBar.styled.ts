import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledContainer = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid ${({theme}) => theme.colors.Neutral80};
    padding: 10px;
    height: 60px;
`

export const StyledUserTag = styled.span`
    color: ${({theme}) => theme.colors.grayscale[2]};
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    margin-right: 30px;
`