import React from 'react';
import RadioButton from 'Components/atoms/RadioButton';
import Label from 'Components/atoms/Label';
import Input from 'Components/atoms/Input';
import { StyledInputField, StyledWrapper, StyledErrorMessage } from './InputField.styled';
import { IInputField } from './InputField.model';

const InputField = ({
    handleChange,
    handleBlur,
    radioValue,
    touched,
    letter,
    index,
    error,
    content
}: IInputField): JSX.Element => {
    return (
        <StyledWrapper>
            <StyledInputField>
                <RadioButton
                    checked={radioValue === letter}
                    onChange={handleChange}
                    id={`radio-${letter}`}
                    onBlur={handleBlur}
                    name="radioValue"
                    value={letter}
                    label=""
                />
                <Label
                    text={`${letter}.`}
                    forText={letter}
                />
                <Input
                    name={`answers[${index}].content`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={true}
                    value={content}
                    id={letter}
                    type="text"
                />
            </StyledInputField>
            {error && touched ? (
                <StyledErrorMessage 
                    id="question_error" 
                    text={error.content} 
                />
            ) : null}
        </StyledWrapper>
    )
}

export default InputField;
