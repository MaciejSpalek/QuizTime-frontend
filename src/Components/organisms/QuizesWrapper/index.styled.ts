import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'

export const StyledContainer = styled.div`
    ${FlexColumn};
    width: 100%;
    height: calc(100vh - 60px);
    justify-content: flex-start;
    background-color: ${({theme}) => theme.colors.grayscale[0]};
    padding: 10px;
    border: 10px solid black;
`
