import styled from 'styled-components';
import { AbbreviateText, FlexCenter } from 'theme/Mixins';
import Paragraph from '../../atoms/Paragraph/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledContainer = styled.div<{primarycolor: string}>`
    ${FlexCenter};
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
    border-bottom-left-radius: 4px;
    background-color: ${({secondarycolor}) => secondarycolor};
`

export const StyledTextWrapper = styled.div`
    position: relative;
    ${FlexCenter};
    flex: 2;
    flex-direction: column;
    height: 100%;
    padding: 10px;
`

export const StyledTitle = styled(Paragraph)`
    color: white;
    ${AbbreviateText};
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
`
export const StyledScore = styled(Paragraph)<{color: string}>`
    color: white;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    margin: 0;
`

export const StyledIcon = styled(FontAwesomeIcon)<{primarycolor: string}>`
    font-size: 56px;
    color: ${({primarycolor}) => primarycolor};
    margin-bottom: 5px;
`

export const StyledAuthorTag = styled(Paragraph)`
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 16px;
    color: white;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
    margin: 0;

`

