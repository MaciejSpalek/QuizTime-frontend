import styled from 'styled-components';

export const StyledLogo = styled.h1`
    color: ${({theme}) => theme.colors.green};
    background-color: ${({theme}) => theme.colors.grayscale[1]};
    border: 3px solid ${({theme}) => theme.colors.green};
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;
`;