import React from 'react';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import Button from 'Components/atoms/Button';
import RadioButton from 'Components/atoms/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyledQuestionPanel,
    StyledFormField,
    StyledQuestionFormField
} from './QuestionAddingPanel.styled';
import { RootState } from 'redux/store';
import { setFormAnswer, setFormQuestion, setFormRadio } from 'redux/Actions/quizActions';

const QuestionAddingPanel = () => {
    const dispatch = useDispatch();
    const formRadioButtonValue = useSelector<RootState>(state => state.quizes.formRadioButton)

    const formQuestion = useSelector<RootState>(state => state.quizes.formQuestion)
    const formAnswerA = useSelector<RootState>(state => state.quizes.formAnswerA)
    const formAnswerB = useSelector<RootState>(state => state.quizes.formAnswerB)
    const formAnswerC = useSelector<RootState>(state => state.quizes.formAnswerC)
    const formAnswerD = useSelector<RootState>(state => state.quizes.formAnswerD)

    const isCheckedRadio = (value: string) => {
        const currentValue = formRadioButtonValue;
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
                    defaultValue={`${formQuestion}`}
                    onChange={(e: any) => dispatch(setFormQuestion(e.target.value))}
                />
            </StyledQuestionFormField>
            <StyledFormField>
                <RadioButton
                    id="A"
                    label=""
                    name="answer"
                    value="A"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => dispatch(setFormRadio(e.target.value))}
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
                    defaultValue={`${formAnswerA}`}
                    onChange={(e: any) => dispatch(setFormAnswer(e.target.value, 'A'))}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="B"
                    label=""
                    name="answer"
                    value="B"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => dispatch(setFormRadio(e.target.value))}
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
                    defaultValue={`${formAnswerB}`}
                    onChange={(e: any) => dispatch(setFormAnswer(e.target.value, 'B'))}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="C"
                    label=""
                    name="answer"
                    value="C"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => dispatch(setFormRadio(e.target.value))}
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
                    defaultValue={`${formAnswerC}`}
                    onChange={(e: any) => dispatch(setFormAnswer(e.target.value, 'C'))}
                />
            </StyledFormField>
            <StyledFormField>
                <RadioButton
                    id="D"
                    label=""
                    name="answer"
                    value="D"
                    isCheckedRadio={isCheckedRadio}
                    handleOnChange={(e) => dispatch(setFormRadio(e.target.value))}
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
                    defaultValue={`${formAnswerD}`}
                    onChange={(e: any) => dispatch(setFormAnswer(e.target.value, 'D'))}
                />
            </StyledFormField>
            <Button text="Add question" />
        </StyledQuestionPanel>
    )
}

export default QuestionAddingPanel;
