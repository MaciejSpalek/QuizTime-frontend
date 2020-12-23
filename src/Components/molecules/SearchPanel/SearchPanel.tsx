import React, { useEffect, useState } from 'react';
import Label from 'Components/atoms/Label';
import RadioBar from '../RadioBar';
import SearchList from '../SearchList';
import QuizItem from './QuizItem';
import { ISearchPanel } from './SearchPanel.model';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { StyledContainer, StyledInputWrapper, StyledInput } from './SearchPanel.styled';

const getQuizzes = (quizzes: IQuizTemplate[]) => {
    return quizzes.map(({ _id, iconName, title, author, colors }) => (
        <QuizItem
            id={`${_id}`}
            icon={iconName}
            text={title}
            author={author}
            colors={colors}
        />
    ));
};

const SearchPanel = ({ quizzes }: ISearchPanel) => {
    const [isSelect, select] = useState(true);
    const [inputValue, setInputValue] = useState('');

    return (
        <StyledContainer>
            <Label forText='search-input' />
            <StyledInputWrapper>
                <StyledInput
                    id='search-input'
                    type='text'
                    placeholder={isSelect ? 'Search quiz' : 'Search user'}
                    ariaLabel='quiz finder'
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {inputValue && <SearchList children={getQuizzes(quizzes)} />}
            </StyledInputWrapper>
            <RadioBar
                isSelect={isSelect}
                onClick={() => select(prev => !prev)}
            />
        </StyledContainer>
    );
};

export default SearchPanel;
