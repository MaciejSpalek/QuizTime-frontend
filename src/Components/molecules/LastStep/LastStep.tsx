import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    StyledButton,
    StyledContainer,
} from './LastStep.styled';

const LastStep = () => {
    const history = useHistory();
    const handleOnClick = () => {
        history.push('/');
    };

    return (
        <StyledContainer>
            <StyledButton
                type='button'
                text='Go back'
                handleOnClick={handleOnClick}
            />
        </StyledContainer>
    )
};

export default LastStep;