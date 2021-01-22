import React from 'react';
import { IUserItem } from './UserItem.model';
import {
    StyledLink,
    StyledIcon,
    StyledText,
    StyledIconWrapper
} from './UserItem.styled';

const UserItem = ({ name, ...props }: IUserItem) => {
    return (
        <StyledLink to={`${name}`} {...props}>
            <StyledIconWrapper>
                <StyledIcon icon={'user-alt'} />
            </StyledIconWrapper>
            <StyledText> {name} </StyledText>
        </StyledLink>
    );
};

export default UserItem;

