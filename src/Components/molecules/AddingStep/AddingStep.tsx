import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import Input from 'Components/atoms/Input/Input';
import Label from 'Components/atoms/Label';
import InputField from './InputField';
import { StyledButton, StyledContainer } from './AddingStep.styled';
import { IPanel } from './AddingStep.model';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';
import ErrorMessage from 'Components/atoms/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setFormQuestions, setFormQuestionsCounter } from 'redux/Actions/quizActions';
import { IFormQuestion } from 'Interfaces/quizInterfaces';

const AddingStep = ({
    handleChange,
    resetForm,
    handleBlur,
    touched,
    values,
    errors
}: IPanel): JSX.Element => {
    const { question, answers, radioValue } = values;
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const formQuestionsCounter = useSelector<RootState, number>(state => state.quizes.formQuestionsCounter);
    const dispatch = useDispatch();

    const isDisabled = useCallback(() => {
        if (isFirstRender) return true;
        return !!((errors.answers || errors.question) && touched);
    }, [isFirstRender, errors, touched]);

    const getCurrentQuestion = () => {
        return {
            id: formQuestionsCounter,
            content: question,
            answers: answers.map(({ content, option }) => ({
                option,
                content,
                isCorrect: option === radioValue
            }))
        }
    };

    const manageResetForm = () => {
        resetForm({
            values: {
                ...values,
                question: "",
                answers: answers.map(({ option }) => ({
                    option,
                    content: "",
                    isCorrect: option === radioValue
                }))
            }
        })
    };

    const addQuestion = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(setFormQuestions([...formQuestions, getCurrentQuestion()]));
        dispatch(setFormQuestionsCounter(formQuestionsCounter+1))
        manageResetForm();
        setIsFirstRender(true);
    }

    useEffect(() => {
        question && setIsFirstRender(false);
    }, [values, question]);


    return (
        <StyledContainer>
            <FormField>
                <Label
                    text="Question"
                    forText="question"
                />
                <Input
                    type="text"
                    id="question"
                    name="question"
                    isRequired={true}
                    ariaInvalid={true}
                    ariaDescribedBy="question_error"
                    value={question}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.question && touched.question ? (
                    <ErrorMessage
                        id="question_error"
                        text={errors.question}
                    />
                ) : null}
            </FormField>
            {answers.map(({ option, content }, index) =>
                <InputField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    letter={option}
                    content={content}
                    key={option}
                    index={index}
                    radioValue={radioValue}
                    touched={touched.answers ? touched.answers[index] : null}
                    error={errors.answers ? errors.answers[index] : null}
                />
            )}
            <StyledButton
                text="Add question"
                type='button'
                handleOnClick={addQuestion}
                isDisabled={isDisabled()}
            />
        </StyledContainer>
    )
}

export default AddingStep;
