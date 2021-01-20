import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';
import {
    StyledErrorPhoto,
    StyledContainer,
    StyledButton,
} from './ErrorPage.styled';

const ErrorPage = () => {
    const history = useHistory();
    const handleOnClick = () => history.push(routes.home);

    return (
        <StyledContainer>
            <StyledErrorPhoto />
            <StyledButton handleOnClick={handleOnClick}>
                Home
            </StyledButton>
        </StyledContainer>
    );
};

export default ErrorPage;