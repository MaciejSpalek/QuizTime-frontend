import React, { useEffect, useState } from 'react';
import colors from 'styles/colors';
import CircularProgressBar from 'Components/molecules/CircularProgressBar';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { routes } from 'routes';
import { IScoreWindow } from './ScoreWindow.model';

import {
    StyledQuestionListItem,
    StyledQuestionList,
    StyledQuestionStep,
    StyledContainer,
    StyledButton
} from './ScoreWindow.styled';
import { axiosInstance } from 'services/api';

const ScoreWindow = ({ score, questions, closeTheQuiz }: IScoreWindow): JSX.Element => {
    const history = useHistory();
    const correctAnswersArray = useSelector<RootState, string[]>(state => state.quizes.correctAnswersArray);
    const userAnswersArray = useSelector<RootState, string[]>(state => state.quizes.userAnswersArray);
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [isListOpen, setIsListOpen] = useState(false);

    const handleOnFirstButton = () => closeTheQuiz();
    const handleOnSecondButton = () => history.push(routes.home);
    const handleOnThridButton = () => setIsListOpen(prev => !prev)

    const getColorsArray = (index: number) => {
        const options = ['A', 'B', 'C', 'D'];
        if (correctAnswersArray[index] === userAnswersArray[index]) {
            return options.map(option => option === correctAnswersArray[index] ? colors.BasicGreen : null);
        } else {
            return options.map(option => {
                if (option === correctAnswersArray[index]) {
                    return colors.BasicGreen;
                } else if (option === userAnswersArray[index]) {
                    return colors.Red;
                } else {
                    return null;
                }
            });
        }
    }

    const addScore = (score: string, quizID: string, executor: string) => {
        axiosInstance.post('/quizes/addScore', { score, quizID, executor})
    };

    const countProgress = (score: string) => {
        const [nominator, denominator] = score.split('/');
        return (+nominator/+denominator)*100;
    };

    useEffect(() => {
        loggedUser && addScore(score, "dsadsafsfdsfs", loggedUser);
    }, [score])
  
    return (
        <StyledContainer>
            <CircularProgressBar
                progress={countProgress(score)}
                strokeWidth={10}
                score={score}
                size={300}
            />
            <StyledButton handleOnClick={handleOnFirstButton} text='Try again' />
            <StyledButton handleOnClick={handleOnSecondButton} text='Back' />
            <StyledButton handleOnClick={handleOnThridButton} text={isListOpen ? 'Hide answers' : 'Show answers'} />
            {isListOpen && <StyledQuestionList>
                {questions?.map(({ _id, content, answers }, index) =>
                    <StyledQuestionListItem key={_id}>
                        <StyledQuestionStep
                            array={getColorsArray(index)}
                            content={content}
                            answers={answers}
                            readonly={true}
                            index={index}
                        />
                    </StyledQuestionListItem>)}
            </StyledQuestionList>}
        </StyledContainer>
    );
};

export default ScoreWindow;