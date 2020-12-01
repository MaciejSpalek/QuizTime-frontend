import React from 'react';
import { 
    StyledContainer, 
    StyledText, 
    StyledIcon, 
    StyledButton
} from './ErrorPage.styled';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push('/');
    };

    return (
        <StyledContainer>
            <StyledIcon icon='frown-open' />
            <StyledText>Error 404</StyledText>
            <StyledButton text="BACK TO HOME" handleOnClick={handleOnClick}/>
        </StyledContainer>
    )
};

export default ErrorPage;