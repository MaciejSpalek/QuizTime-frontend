import styled from 'styled-components'
import { FlexCenter } from '../../../styles/Mixins'

export const StyledContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    ${FlexCenter};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.white};
    border-bottom: 2px solid ${({theme}) => theme.colors.Neutral80};
    padding: 10px;
`