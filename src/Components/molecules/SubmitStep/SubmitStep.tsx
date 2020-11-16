import React, { useState } from 'react';
import Question from './Question';
import { IFormQuestions } from 'Interfaces/quizInterfaces';
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
    const formQuestions = useSelector<RootState, IFormQuestions[]>(state => state.quizes.formQuestions);
    const [questionsCounter] = useState(formQuestions.length)

    return (
        <StyledSubmitStep>
            {questionsCounter ? 
                <StyledWrapper>
                    <StyledHeading> Your questions (at least 5) </StyledHeading>
                    <StyledList> 
                        {formQuestions.map(({ question, answers }, index) =>
                            <Question
                                question={question}
                                answers={answers}
                                index={index+1}
                                key={question}
                            />)
                        }
                    </StyledList>
                    {questionsCounter >= 5 ? <Button text="Submit" type="submit" /> : null}
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
