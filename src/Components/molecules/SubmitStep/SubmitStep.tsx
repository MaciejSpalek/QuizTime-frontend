import React, { MouseEvent, useState } from 'react';
import Question from './Question';
import { IFormColor, IFormQuestion } from 'Interfaces/quizInterfaces';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { 
    StyledSubmitStep, 
    StyledPlaceholderText, 
    StyledHeading, 
    StyledWrapper, 
    StyledList 
} from './SubmitStep.styled';
import Button from 'Components/atoms/Button';
import Placeholder from 'templates/PlaceholderTemplate/PlaceholderTemplate';

const SubmitStep = (): JSX.Element => {
    const questions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);

    return (
        <StyledSubmitStep>
            {questions.length ? 
                <StyledWrapper>
                    <StyledHeading> Your questions (at least 5) </StyledHeading>
                    <StyledList> 
                        {questions.map(({ content, answers }, index) =>
                            <Question
                                question={content}
                                answers={answers}
                                index={index+1}
                                key={content}
                            />)
                        }
                    </StyledList>
                    {questions.length >= 5 ? <Button text="Submit" type="submit" /> : null}
                </StyledWrapper> 
                : 
                <Placeholder>
                    <StyledPlaceholderText> No questions </StyledPlaceholderText>
                </Placeholder>
            }

        </StyledSubmitStep>
    )
}

export default SubmitStep;
