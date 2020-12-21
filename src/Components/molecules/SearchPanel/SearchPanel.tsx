import React from 'react';
import Label from 'Components/atoms/Label';
import Input from 'Components/atoms/Input/Input';
import { StyledContainer, StyledReadingGlass } from './SearchPanel.styled';

const SearchPanel = ()=> {
    return (
        <StyledContainer>
            <Label forText="search-input" />
            <Input 
                id="search-input"
                type="text"
                placeholder="search quiz"
                ariaLabel="quiz finder"
            />
            <StyledReadingGlass />
        </StyledContainer>
    );
};

export default SearchPanel;
