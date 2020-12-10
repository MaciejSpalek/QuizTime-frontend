import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { StyledContainer, StyledScore } from './ScoreWindow.styled';

const ScoreWindow = (): JSX.Element => {
    const score = useSelector<RootState>(state => state.quizes.currentScore)
    return (
        <StyledContainer>
            <StyledScore> {score} </StyledScore>
        </StyledContainer>
    );
};

export default ScoreWindow;

