import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    height: 100%;
    background-color: ${({theme}) => theme.colors.grayscale[0]};
`

const UnknownPage = ()=> {
    return (
        <StyledContainer>
            <p>Error</p>
        </StyledContainer>
    )
}

export default UnknownPage;


