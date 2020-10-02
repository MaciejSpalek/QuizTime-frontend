import styled from 'styled-components';
import { AbbreviateText, FlexCenter } from 'theme/Mixins';
import Paragraph from '../../atoms/Paragraph/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledContainer = styled.div<{primarycolor: string}>`
    ${FlexCenter};
    border: 2px solid ${({theme}) => theme.colors.Neutral80};
    background-color: ${({primarycolor}) => primarycolor};
    border-radius: 4px;
    margin: 10px 0;

`

export const StyledImageWrapper = styled.picture<{secondarycolor: string}>`
    ${FlexCenter};
    flex-direction: column;
    flex: 1;
    height: 140px;
    border-top-left-radius: 4px;
    background-color: ${({secondarycolor}) => secondarycolor};
`

export const StyledTextWrapper = styled.div`
    ${FlexCenter};
    flex: 2;
    flex-direction: column;
    height: 100%;
`

export const StyledTitle = styled(Paragraph)`
    color: white;
    ${AbbreviateText};
`
export const StyledScore = styled(Paragraph)<{color: string}>`
    color: ${({color}) => color};
    margin: 0;
`

export const StyledIcon = styled(FontAwesomeIcon)<{primarycolor: string}>`
    font-size: 56px;
    color: ${({primarycolor}) => primarycolor};
    margin-bottom: 5px;
`

