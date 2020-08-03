import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'

export const StyledContainer = styled.li`
    ${FlexCenter};
    flex-direction: column;
    height: 300px;
    margin: 10px 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    background-color: ${({theme}) => theme.colors.white};
`

export const StyledTopWrapper = styled.div`
    ${FlexCenter};
    justify-content: flex-start;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.grayscale[5]};
`

export const StyledBottomWrapper = styled.div`
    ${FlexCenter};
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 15px;
`

export const StyledImageWrapper = styled.picture`
    ${FlexCenter};
    flex: 1;
    height: 140px;
    border-right: 1px solid ${({theme}) => theme.colors.grayscale[5]};
    background-color: ${({theme}) => theme.colors.white};
`

export const StyledTextWrapper = styled.div`
    ${FlexCenter};
    flex: 2;
    flex-direction: column;
    height: auto;
`

export const StyledGreenLabel = styled.span`
    background-color: ${({theme}) => theme.colors.grayscale[2]};
    color: ${({theme}) => theme.colors.green};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    padding: 5px;
    border-radius: 3px;
`


