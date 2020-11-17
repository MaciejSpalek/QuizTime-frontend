import React, { useState, MouseEvent } from 'react';
import { IQuestion } from './Question.model';
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
} from './Question.styled';

const Question = ({ question, answers, index }: IQuestion): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const handleArrowButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }

    const handleRemoveButton = () => {

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

export default Question;
