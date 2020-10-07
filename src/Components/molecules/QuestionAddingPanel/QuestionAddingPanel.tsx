import React, { useEffect, useState } from 'react';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import Button from 'Components/atoms/Button';
import RadioButton from 'Components/atoms/RadioButton';
import {
    StyledQuestionPanel,
    StyledFormField,
    StyledQuestionFormField
} from './QuestionAddingPanel.styled';

const QuestionAddingPanel = () => {

    const isCheckedRadio = (value: string) => {
        const currentValue = 'A';
        return currentValue === value;
    }

    return (
        <StyledQuestionPanel>
            <StyledQuestionFormField>
                <Label
                    text="Question"
                    forText="question"
                />
                <Input
                    type="text"
                    id="question"
                    name="question"
                    isRequired={true}
                />
            </StyledQuestionFormField>
            <StyledFormField>
                <RadioButton
                    id="A"
                    label=""
                    name="answer"
                    value="A"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => console.log(e.target.value)}
                />
                <Label
                    text="A."
                    forText="A"
                />
                <Input
                    type="text"
                    id="A"
                    name="A"
                    isRequired={true}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="B"
                    label=""
                    name="answer"
                    value="B"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => console.log(e.target.value)}

                />
                <Label
                    text="B."
                    forText="B"
                />
                <Input
                    type="text"
                    id="B"
                    name="B"
                    isRequired={true}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="C"
                    label=""
                    name="answer"
                    value="C"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => console.log(e.target.value)}
                />
                <Label
                    text="C."
                    forText="C"
                />
                <Input
                    type="text"
                    id="C"
                    name="C"
                    isRequired={true}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="D"
                    label=""
                    name="answer"
                    value="D"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => console.log(e.target.value)}
                />
                <Label
                    text="D."
                    forText="D"
                />
                <Input
                    type="text"
                    id="D"
                    name="D"
                    isRequired={true}
                />
            </StyledFormField>
            <Button text="Add question" />
        </StyledQuestionPanel>
    )
}

export default QuestionAddingPanel;
