import React from 'react';
import { IUserItem } from './UserItem.model';
import {
    StyledLink,
    StyledIcon,
    StyledName,
    StyledIconWrapper
} from './UserItem.styled';

const UserItem = ({ name, ...props }: IUserItem) => {
    return (
        <StyledLink to={`${name}`} {...props}>
            <StyledIconWrapper>
                <StyledIcon icon={'user-alt'} />
            </StyledIconWrapper>
            <StyledName> {name} </StyledName>
        </StyledLink>
    );
};

export default UserItem;

