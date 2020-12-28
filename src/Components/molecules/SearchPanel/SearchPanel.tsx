import React, { useEffect, useRef, useState } from 'react';
import Input from 'Components/atoms/Input';
import Label from 'Components/atoms/Label';
import SearchList from '../SearchList';
import RadioBar from '../RadioBar';
import { StyledContainer, StyledInputWrapper } from './SearchPanel.styled';
import { clearInput, isInputTextMatch } from 'helpers/inputs';
import { ISearchPanel, IUsers } from './SearchPanel.model';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { getElementWidth, getQuizzes, getUsers } from 'helpers/getters';
import { useEventListener, useOutsideClick } from 'hooks';

const SearchPanel = ({ quizzes, users }: ISearchPanel) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isSelect, select] = useState(true);
    const [inputWidth, setInputWith] = useState(0);
    const [mutableUsers, setMutableUsers] = useState<IUsers[]>([]);
    const [mutableQuizzes, setMutableQuizzes] = useState<IQuizTemplate[]>([]);

    const resetParameters = () => {
        setMutableQuizzes([]);
        setMutableUsers([]);
        clearInput(inputRef);
    };

    useOutsideClick(inputRef, () => {
        resetParameters()
    })

    useEventListener('resize', () => {
        setInputWith(+`${getElementWidth(inputRef)}`);
    })

    const handleOnToggle = () => {
        select(prev => !prev);
        resetParameters();
    };

    

    const filterQuizzes = (quizzes: IQuizTemplate[], e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const filteredQuizzes = quizzes.filter(item => isInputTextMatch(inputValue, item.title));
        inputValue ?
            setMutableQuizzes(filteredQuizzes) :
            setMutableQuizzes([]);
    };

    const filterUsers = (users: IUsers[], e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const filteredUsers = users.filter(item => isInputTextMatch(inputValue, item.name));
        inputValue ?
            setMutableUsers(filteredUsers) :
            setMutableUsers([]);
    };

    return (
        <StyledContainer>
            <Label forText='search-input' />
            <StyledInputWrapper>
                <Input
                    _ref={inputRef}
                    id='search-input'
                    type='text'
                    placeholder={isSelect ? 'Search quiz' : 'Search user'}
                    onChange={(e) => isSelect ? filterQuizzes(quizzes, e) : filterUsers(users, e)}
                />
                {!!mutableUsers.length && <SearchList children={getUsers(mutableUsers)} />}
                {!!mutableQuizzes.length && <SearchList children={getQuizzes(mutableQuizzes)} />}
            </StyledInputWrapper>
            <RadioBar
                isSelect={isSelect}
                onClick={handleOnToggle}
            />
        </StyledContainer>
    );
};

export default SearchPanel;
