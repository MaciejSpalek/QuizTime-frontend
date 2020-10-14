import React from 'react';
import RadioButton from 'Components/atoms/RadioButton';
import Label from 'Components/atoms/Label';
import Input from 'Components/atoms/Input';
import { StyledInputField } from './InputField.styled';
import { IInputField } from './InputField.model';
import { setFormAnswer, setFormRadio } from 'redux/Actions/quizActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const InputField = ({ 
    letter, 
    defaultValue
}: IInputField): JSX.Element=> {
    const dispatch = useDispatch();
    const formRadioButtonValue = useSelector<RootState>(state => state.quizes.formRadioButton)

    const isCheckedRadio = (value: string) => {
        const currentValue = formRadioButtonValue;
        return currentValue === value;
    }

    return (
        <StyledInputField>
            <RadioButton
                id={letter}
                label=""
                name="answer"
                value={letter}
                isCheckedRadio={isCheckedRadio}
                handleOnChange={(e) => dispatch(setFormRadio(e.target.value))}
            />
            <Label
                text={`${letter}.`}
                forText={letter}
            />
            <Input
                type="text"
                id={letter}
                name={letter}
                isRequired={true}
                defaultValue={`${defaultValue}`}
                onChange={(e: any) => dispatch(setFormAnswer(e.target.value, letter))}
            />
        </StyledInputField>
    )
}

export default InputField;
