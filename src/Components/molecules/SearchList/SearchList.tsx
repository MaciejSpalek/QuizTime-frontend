import React, { Children } from 'react';
import { ISearchList } from './SearchList.model';
import {
    StyledContainer,
    StyledListItem,
    StyledGradient,
    StyledList
} from './SearchList.styled';

const SearchList = ({ children, ...props }: ISearchList) => {
    return (
        <StyledContainer>
            <StyledList  { ...props }>
                {Children.map(children, Child => (
                    <StyledListItem> { Child } </StyledListItem>
                ))}
            </StyledList>
            <StyledGradient />
        </StyledContainer>
    );
};

export default SearchList;

