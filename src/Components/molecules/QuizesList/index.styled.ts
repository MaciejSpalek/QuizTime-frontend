import styled from 'styled-components'
import { FlexColumn } from '../../../theme/Mixins'

export const StyledList = styled.ul`
    position: absolute;
    top: 60px;
    left: 0;
    ${FlexColumn};
    width: 100%;
    height: calc(100vh - 60px - 60px);
    padding: 10px;
    overflow: auto;
    justify-content: flex-start;
    background-color: ${({theme}) => theme.colors.white};
`
