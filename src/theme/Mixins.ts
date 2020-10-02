import  { css } from 'styled-components';

export const FlexColumn = css`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FlexRow = css`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const FirstLinkStyle = css`
    background-color: ${({theme}) => theme.colors.grayscale[2]};
    padding: 10px;
    margin: 10px 0;
    font-weight: bold;


`

export const AbbreviateText = css`
   -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
`