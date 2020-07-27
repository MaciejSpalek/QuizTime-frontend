import styled from 'styled-components'

export const StyledHeading = styled.h1`
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.grayscale[1]};
    border: 3px solid white;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 0;
`