import React, { useEffect, useState } from 'react';
import Button from 'Components/atoms/Button';
import Placeholder from 'templates/PlaceholderTemplate';
import QuestionBox from './QuestionBox';
import { RootState } from 'redux/store';
import { IFormQuestion } from 'Interfaces/quizInterfaces';
import { useSelector } from 'react-redux';
import { ISubmitStep } from './SubmitStep.model';
import { 
    StyledSubmitStep, 
    StyledPlaceholderText, 
    StyledHeading, 
    StyledWrapper, 
    StyledList 
} from './SubmitStep.styled';

const SubmitStep = ({ errors, touched, values, isSubmitting }: ISubmitStep): JSX.Element => {
    const questions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const isDisabled = () => {
        if(isFirstRender) return true;
        return !!(errors.title && touched) || isSubmitting;
    };

    useEffect(() => {
       values.title && setIsFirstRender(false);
    }, [values.title]);


    return (
        <StyledSubmitStep>
            {questions.length ? 
                <StyledWrapper>
                    <StyledHeading> Your questions </StyledHeading>
                    <StyledList> 
                        {questions.map(({ content, answers, id }, index) =>
                        <li key={id}>
                            <QuestionBox
                                question={content}
                                answers={answers}
                                index={index+1}
                                id={id}
                            />
                        </li>)}
                    </StyledList>
                    <Button text="Create quiz" type="submit" isDisabled={isDisabled()} /> 
                </StyledWrapper> : 
                <Placeholder>
                    <StyledPlaceholderText> 
                        No questions 
                    </StyledPlaceholderText>
                </Placeholder>
            }

        </StyledSubmitStep>
    );
};

export default SubmitStep;
