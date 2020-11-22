import { IFormQuestion } from 'Interfaces/quizInterfaces';
import React, { useState, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormQuestions } from 'redux/Actions/quizActions';
import { RootState } from 'redux/store';
import { IQuestionBox } from './QuestionBox.model';
import {
    StyledIconButton,
    StyledParagraph,
    StyledQuestion,
    StyledListItem,
    StyledWrapper,
    StyledHeading,
    StyledTopBar,
    StyledNumber,
    StyledList
} from './QuestionBox.styled';

const QuestionBox = ({ question, answers, index, id }: IQuestionBox): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const dispatch = useDispatch();

    const handleArrowButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }

    const handleRemoveButton = () => {
        const newArray = formQuestions.filter(el => el.id !== id)
        dispatch(setFormQuestions(newArray));
    }

    return (
        <StyledQuestion>
            <StyledTopBar>
                <StyledNumber> {`${index}.`} </StyledNumber>
                <StyledWrapper>
                    <StyledIconButton 
                        icon={'trash-alt'} 
                        handleOnClick={handleRemoveButton}
                    />
                    <StyledIconButton 
                        icon={isOpen ? 'angle-up' : 'angle-down'} 
                        handleOnClick={(e) => handleArrowButton(e)}
                    />
                </StyledWrapper>
            </StyledTopBar>
            <StyledHeading> {`${question}`} </StyledHeading>
            {isOpen ? 
                <StyledList>
                    {answers.map(({ option, content, isCorrect }) =>
                        <StyledListItem
                            isCorrect={isCorrect}
                            key={option}>
                            <StyledParagraph
                                isCorrect={isCorrect}
                                text={`${option}. ${content} `}
                            />
                        </StyledListItem>
                    )}
                </StyledList> : null}
        </StyledQuestion>
    )
};

export default QuestionBox;
