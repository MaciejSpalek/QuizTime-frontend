import React from 'react';
import Button from 'Components/atoms/Button';
import Placeholder from 'templates/PlaceholderTemplate/PlaceholderTemplate';
import QuestionBox from './QuestionBox';
import { RootState } from 'redux/store';
import { IFormQuestion } from 'Interfaces/quizInterfaces';
import { useSelector } from 'react-redux';
import { ISubmitStep } from './SubmitStep.model';
import { Constants } from 'helpers/constants';
import { 
    StyledSubmitStep, 
    StyledPlaceholderText, 
    StyledHeading, 
    StyledWrapper, 
    StyledList 
} from './SubmitStep.styled';

const SubmitStep = ({ errors, isSubmitting }: ISubmitStep): JSX.Element => {
    const questions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const isDisabled = () => {
        return questions.length < Constants.MinFormQuestions || !!errors.title || isSubmitting;
    };

    return (
        <StyledSubmitStep>
            {questions.length ? 
                <StyledWrapper>
                    <StyledHeading> Your questions (at least 5) </StyledHeading>
                    <StyledList> 
                        {questions.map(({ content, answers, id }, index) =>
                            <QuestionBox
                                question={content}
                                answers={answers}
                                index={index+1}
                                key={id}
                                id={id}
                            />)
                        }
                    </StyledList>
                    <Button text="Submit" type="submit" isDisabled={isSubmitting} /> 
                </StyledWrapper> : 
                <Placeholder>
                    <StyledPlaceholderText> No questions </StyledPlaceholderText>
                </Placeholder>
            }

        </StyledSubmitStep>
    )
}

export default SubmitStep;
