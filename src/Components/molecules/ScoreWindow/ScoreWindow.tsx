import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'redux/store';
import { routes } from 'routes';
import colors from 'styles/colors';
import { IScoreWindow } from './ScoreWindow.model';

import {
    StyledTopWrapper,
    StyledContainer,
    StyledButton,
    StyledScore,
    StyledText,
    StyledQuestionList,
    StyledQuestionListItem,
    StyledQuestionStep
} from './ScoreWindow.styled';

const ScoreWindow = ({ score, questions, closeTheQuiz }: IScoreWindow): JSX.Element => {
    const correctAnswersArray = useSelector<RootState, string[]>(state => state.quizes.correctAnswersArray);
    const userAnswersArray = useSelector<RootState, string[]>(state => state.quizes.userAnswersArray);
    
    const [isListOpen, setIsListOpen] = useState(false);
    const history = useHistory();
    const handleOnFirstButton = () => closeTheQuiz();
    const handleOnSecondButton = () => history.push(routes.home);
    const handleOnThridButton = () => setIsListOpen(prev => !prev)
    
    const getColorsArray = (index: number) => {
        const options = ['A', 'B', 'C', 'D'];
        if(correctAnswersArray[index] === userAnswersArray[index]) { 
            return options.map(option => option === correctAnswersArray[index] ? colors.BasicGreen : null);
        } else { 
            return options.map(option => {
                if(option === correctAnswersArray[index]) {
                    return colors.BasicGreen;
                } else if(option === userAnswersArray[index]) {
                    return colors.Red;
                } else {
                    return null;
                }
            });
        }
    }


    return (
        <StyledContainer>
            <StyledTopWrapper>
                <StyledText> SCORE </StyledText>
                <StyledScore> {score} </StyledScore>
            </StyledTopWrapper>
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