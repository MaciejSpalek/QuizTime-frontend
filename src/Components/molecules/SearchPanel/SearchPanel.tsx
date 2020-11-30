import React from 'react';
import Label from 'Components/atoms/Label';
import Input from 'Components/atoms/Input/Input';
import Image from 'Components/atoms/Image';
import ReadingGlassImage from 'assets/ReadingGlass.svg';
import { StyledContainer } from './SearchPanel.styled';

const SearchPanel = ()=> {
    return (
        <StyledContainer>
            <Label forText="search-input" />
            <Input 
                id="search-input"
                type="search"
                placeholder="Szukaj quizu"
                ariaLabel="Wyszukiwarka quizów"
            />
            <Image 
                url={ReadingGlassImage}
                alt="Lupa"
                width="25px"
                height="25px"
                margin="0 0 0 10px"
            />
        </StyledContainer>
    );
};

export default SearchPanel;
