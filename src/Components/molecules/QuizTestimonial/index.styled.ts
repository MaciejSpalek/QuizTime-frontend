import styled from 'styled-components'
import { FlexCenter } from '../../../theme/Mixins'
import Paragraph from '../../atoms/Paragraph/index'

export const StyledContainer = styled.li`
    ${FlexCenter};
    flex-direction: column;
    margin: 10px 0;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.Neutral80};
`

export const StyledTopWrapper = styled.div<{color: string}>`
    ${FlexCenter};
    justify-content: flex-start;
    width: 100%;
    border-bottom: 2px solid ${({theme}) => theme.colors.Neutral80};
    background-color: ${({color}) => color};
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

`

export const StyledTextWrapper = styled.div`
    ${FlexCenter};
    flex: 2;
    flex-direction: column;
    height: 100%;
`

export const StyledTitle = styled(Paragraph)`
    color: white;
`
export const StyledScore = styled(Paragraph)`
    color: white;
`

export const StyledGreenLabel = styled.span`
    background-color: ${({theme}) => theme.colors.grayscale[2]};
    color: ${({theme}) => theme.colors.green};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    padding: 5px;
    border-radius: 4px;
`


export const StyledSVG = styled.svg<{svgIcon: string}>`
    path {
        fill: black;
    }
`