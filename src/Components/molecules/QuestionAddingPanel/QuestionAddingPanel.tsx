import React from 'react';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import Button from 'Components/atoms/Button';
import RadioButton from 'Components/atoms/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyledAddingPanel,
    StyledQuestionFormField
} from './QuestionAddingPanel.styled';
import { RootState } from 'redux/store';
import { setFormQuestion } from 'redux/Actions/quizActions';
import InputField from './InputField';

const QuestionAddingPanel = () => {
    const dispatch = useDispatch();

    const formQuestion = useSelector<RootState>(state => state.quizes.formQuestion)
    const formAnswerA = useSelector<RootState>(state => state.quizes.formAnswerA)
    const formAnswerB = useSelector<RootState>(state => state.quizes.formAnswerB)
    const formAnswerC = useSelector<RootState>(state => state.quizes.formAnswerC)
    const formAnswerD = useSelector<RootState>(state => state.quizes.formAnswerD)

    const answers = [
        {
            letter: 'A',
            defaultValue: `${formAnswerA}`
        },
        {
            letter: 'B',
            defaultValue: `${formAnswerB}`
        },
        {
            letter: 'C',
            defaultValue: `${formAnswerC}`
        },
        {
            letter: 'D',
            defaultValue: `${formAnswerD}`
        }
    ];

    

    return (
        <StyledAddingPanel>
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
            {answers.map(({letter, defaultValue}) => <InputField key={letter} letter={letter} defaultValue={defaultValue}/>)}
            <Button text="Add question" />
        </StyledAddingPanel>
    )
}

export default QuestionAddingPanel;
