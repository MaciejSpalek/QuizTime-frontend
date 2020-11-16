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
import { IFormQuestions } from 'Interfaces/quizInterfaces';

const AddingStep = ({
    handleChange,
    resetForm,
    handleBlur,
    touched,
    values,
    errors
}: IPanel): JSX.Element => {
    const dispatch = useDispatch();
    const formQuestions = useSelector<RootState, IFormQuestions[]>(state => state.quizes.formQuestions);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const [buttonState, setButtonState] = useState(true);


    const isPossibleAddQuestion = () => {
        const allAnswersState = !errors.answers && !isFirstRender;
        const questionState = !errors.question && !isFirstRender;
        return allAnswersState && questionState;
    }

    const getCurrentQuestion = () => {
        return {
            question: values.question,
            answers: values.answers.map(({ content, option }) =>
                ({
                    option,
                    content,
                    isCorrect: option === values.radioValue
                }))
        }
    };

    const manageResetForm = () => {
        resetForm({
            values: {
                ...values,
                question: "",
                answers: values.answers.map(({ option }) =>
                    ({
                        option,
                        content: "",
                        isCorrect: option === values.radioValue
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
                    value={values.question}
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
            {values.answers.map(({ option, content }, index) =>
                <InputField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    letter={option}
                    content={content}
                    key={option}
                    index={index}
                    radioValue={values.radioValue}
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
