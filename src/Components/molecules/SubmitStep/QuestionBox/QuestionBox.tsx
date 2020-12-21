import ModalWindow from 'Components/molecules/ModalWindow';
import { useOutsideClick } from 'hooks';
import { IFormQuestion } from 'Interfaces/quizInterfaces';
import React, { useState, MouseEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormQuestions } from 'redux/Actions/quizActions';
import { RootState } from 'redux/store';
import { IQuestionBox } from './QuestionBox.model';
import {
    StyledIconButton,
    StyledParagraph,
    StyledContainer,
    StyledListItem,
    StyledWrapper,
    StyledHeading,
    StyledTopBar,
    StyledNumber,
    StyledList
} from './QuestionBox.styled';

const QuestionBox = ({ question, answers, index, id }: IQuestionBox): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);
    const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
    const dispatch = useDispatch();
    const boxRef = useRef(null);
    
    useOutsideClick(boxRef, () => {
        setIsOpen(false);
    });

    const handleArrowButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }

    const handleConfirm = () => {
        const newArray = formQuestions.filter(question => question.id !== id)
        dispatch(setFormQuestions(newArray));
        setIsModalActive(false);
    };

    const handleCancel = () => setIsModalActive(false);

    return (
        <StyledContainer ref={boxRef}>
            <StyledTopBar>
                <StyledNumber> {`${index}.`} </StyledNumber>
                <StyledWrapper>
                    <StyledIconButton 
                        type='button'
                        icon='trash-alt'
                        handleOnClick={() => setIsModalActive(true)}
                    />
                    <StyledIconButton 
                        type='button'
                        icon={isOpen ? 'angle-up' : 'angle-down'} 
                        handleOnClick={handleArrowButton}
                    />
                </StyledWrapper>
            </StyledTopBar>
            <StyledHeading> {question} </StyledHeading>
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
                <ModalWindow
                    isActive={isModalActive}
                    description='Wanna remove the question?'
                    handleConfirm={handleConfirm}
                    handleCancel={handleCancel}
                />
        </StyledContainer>
    )
};

export default QuestionBox;
