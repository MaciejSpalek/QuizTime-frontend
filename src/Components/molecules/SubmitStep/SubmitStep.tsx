import React, { useEffect, useState } from 'react';
import Placeholder from 'templates/PlaceholderTemplate';
import Button from 'Components/atoms/Button';
import QuestionBox from './QuestionBox';
import { IFormQuestion } from 'Interfaces/quizInterfaces';
import { ISubmitStep } from './SubmitStep.model';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { 
    StyledSubmitStep, 
    StyledPlaceholderText, 
    StyledHeading, 
    StyledMainWrapper,
    StyledTopWrapper, 
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
                <StyledMainWrapper>
                    <StyledTopWrapper>
                        <StyledHeading> Questions ({questions.length}) </StyledHeading>
                        <Button text="Create" type="submit" isDisabled={isDisabled()} /> 
                    </StyledTopWrapper>
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
                </StyledMainWrapper> : 
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
