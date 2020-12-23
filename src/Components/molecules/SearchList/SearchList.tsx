import React, { Children } from 'react';
import { ISearchList } from './SearchList.model';
import { StyledList } from './SearchList.styled';

const SearchList = ({ children, ...props }: ISearchList) => {
    return (
        <StyledList {...props}>
            {Children.map(children, Child => (
               <li> { Child } </li>
            ))}
        </StyledList>
    );
};

export default SearchList;

