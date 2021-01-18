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
            <StyledButton text="Home" handleOnClick={handleOnClick} />
        </StyledContainer>
    );
};

export default ErrorPage;