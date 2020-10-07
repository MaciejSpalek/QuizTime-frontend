import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'

export const StyledMultiStepForm = styled.form`
    ${FlexColumn};
    width: 100%;
    height: calc(100vh - 60px - 60px);
    background-color: ${({theme}) => theme.colors.grayscale[0]};
`

export const StyledChild = styled.div`
    ${FlexColumn};
    height: calc(100vh - 60px - 60px - 60px);
`
