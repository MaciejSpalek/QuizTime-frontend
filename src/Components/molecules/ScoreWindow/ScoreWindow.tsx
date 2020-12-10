import React from 'react'
import { StyledContainer, StyledScore } from './ScoreWindow.styled';

const  ScoreWindow = (): JSX.Element => {
    return (
        <StyledContainer>
            <StyledScore> 10/20 </StyledScore>
        </StyledContainer>
    );
};

export default ScoreWindow;

