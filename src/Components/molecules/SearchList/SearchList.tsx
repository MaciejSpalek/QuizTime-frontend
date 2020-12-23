import React, { Children } from 'react';
import { ISearchList } from './SearchList.model';
import { StyledList, StyledListItem } from './SearchList.styled';

const SearchList = ({ children, ...props }: ISearchList) => {
    return (
        <StyledList {...props}>
            {Children.map(children, Child => (
               <StyledListItem> { Child } </StyledListItem>
            ))}
        </StyledList>
    );
};

export default SearchList;

