import React, { Children } from 'react';
import { ISearchList } from './SearchList.model';
import {
    StyledList,
    StyledListItem,
    StyledGradient,
    StyledContainer
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

