import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import InputField from './InputField';
import { StyledButton, StyledContainer } from './AddingStep.styled';
import { IPanel } from './AddingStep.model';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';
import ErrorMessage from 'Components/atoms/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setFormQuestions } from 'redux/Actions/quizActions';
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
    const [ buttonState, setButtonState ] = useState(true);
    const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const dispatch = useDispatch();

    const isPossibleAddQuestion = () => {
        const allAnswersState = !errors.answers && !isFirstRender;
        const questionState = !errors.question && !isFirstRender;
        return allAnswersState && questionState;
    };

    const getCurrentQuestion = () => {
        return {
            content: question,
            answers: answers.map(({ content, option }) =>
                ({
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
                answers: answers.map(({ option }) =>
                    ({
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
        manageResetForm();
        setButtonState(true);
        setIsFirstRender(true);
    }


    useEffect(() => {
        setIsFirstRender(false);
    }, [touched, errors, values]);

    useEffect(() => {
        setButtonState(!isPossibleAddQuestion());
    }, [errors, values]);



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
                type="text"
                handleOnClick={(e) => addQuestion(e)}
                isDisabled={buttonState}
            />
        </StyledContainer>
    )
}

export default AddingStep;
