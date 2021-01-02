import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    StyledContainer, 
    StyledText, 
    StyledIcon, 
    StyledButton
} from './ErrorPage.styled';

const ErrorPage = () => {
    const history = useHistory();
    const handleOnClick = () => history.push('/');
    
    return (
        <StyledContainer>
            <StyledIcon icon='frown-open' />
            <StyledText> Error 404 </StyledText>
            <StyledButton text="Back" handleOnClick={handleOnClick}/>
        </StyledContainer>
    );
};

export default ErrorPage;