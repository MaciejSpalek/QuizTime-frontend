import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    StyledErrorPhoto,
    StyledContainer, 
    StyledButton,
    StyledText
} from './ErrorPage.styled';

const ErrorPage = () => {
    const history = useHistory();
    const handleOnClick = () => history.push('/');
    
    return (
        <StyledContainer>
            <StyledErrorPhoto />
            <StyledText> Page not found </StyledText>
            <StyledButton text="Retry" handleOnClick={handleOnClick}/>
        </StyledContainer>
    );
};

export default ErrorPage;