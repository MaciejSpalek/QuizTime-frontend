import React from 'react';
import { StyledLink, StyledTitle } from '../QuizItem/QuizItem.styled';
import { IUserItem } from './UserItem.model';
import {
    StyledIconWrapper,
    StyledIcon
} from './UserItem.styled';

const UserItem = ({ name, ...props }: IUserItem) => {
    return (
        <StyledLink to={`${name}`} {...props}>
            <StyledIconWrapper>
                <StyledIcon icon={'user-alt'} />
            </StyledIconWrapper>
            <StyledTitle> {name} </StyledTitle>
        </StyledLink>
    );
};

export default UserItem;

