import React, { useState } from 'react';
import _colors from 'styles/colors';
import CircularProgressBar from 'Components/molecules/CircularProgressBar';
import { routes } from 'routes';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IScoreWindow } from './ScoreWindow.model';
import {
    StyledQuestionList,
    StyledQuestionStep,
    StyledContainer,
    StyledButton
} from './ScoreWindow.styled';

const ScoreWindow = ({ score, questions, closeTheQuiz }: IScoreWindow): JSX.Element => {
    const { correctAnswersArray, userAnswersArray } = useSelector((state: RootState) => state.quizzes);
    const [isListOpen, setIsListOpen] = useState(false);
    const history = useHistory();

    const handleOnFirstButton = () => closeTheQuiz();
    const handleOnSecondButton = () => history.push(routes.home);
    const handleOnThridButton = () => setIsListOpen(prev => !prev);

    const getColorsArray = (index: number) => {
        const options = ['A', 'B', 'C', 'D'];
        if (correctAnswersArray[index] === userAnswersArray[index]) {
            return options.map(option => option === correctAnswersArray[index] ? _colors.BasicGreen : null);
        } else {
            return options.map(option => {
                if (option === correctAnswersArray[index]) {
                    return _colors.BasicGreen;
                } else if (option === userAnswersArray[index]) {
                    return _colors.Red;
                } else {
                    return null;
                }
            });
        }
    };

    const countProgress = (score: string) => {
        const [nominator, denominator] = score.split('/');
        return (+nominator / +denominator) * 100;
    };

    return (
        <StyledContainer>
            <CircularProgressBar
                progress={countProgress(score)}
                strokeWidth={10}
                score={score}
                size={300}
            />
            <StyledButton handleOnClick={handleOnFirstButton}>
                Try again
            </StyledButton>
            <StyledButton handleOnClick={handleOnSecondButton}>
                Back
            </StyledButton>
            <StyledButton handleOnClick={handleOnThridButton}>
                {isListOpen ? 'Hide answers' : 'Show answers'}
            </StyledButton>
            {isListOpen && <StyledQuestionList>
                {questions?.map(({ _id, content, answers }, index) =>
                    <li key={_id}>
                        <StyledQuestionStep
                            array={getColorsArray(index)}
                            content={content}
                            answers={answers}
                            readonly={true}
                            index={index}
                        />
                    </li>)}
            </StyledQuestionList>}
        </StyledContainer>
    );
};

export default ScoreWindow;