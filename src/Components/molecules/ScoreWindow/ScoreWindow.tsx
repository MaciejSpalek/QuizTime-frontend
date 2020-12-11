import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';
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
    const [isListOpen, setIsListOpen] = useState(false);
    const history = useHistory();

    const handleOnFirstButton = () => closeTheQuiz();
    const handleOnSecondButton = () => history.push(routes.home);
    const handleOnThridButton = () => setIsListOpen(prev => !prev)

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
                            index={index}
                            content={content}
                            answers={answers}
                            readonly={true}
                        />
                    </StyledQuestionListItem>)}
            </StyledQuestionList>}
        </StyledContainer>
    );
};

export default ScoreWindow;