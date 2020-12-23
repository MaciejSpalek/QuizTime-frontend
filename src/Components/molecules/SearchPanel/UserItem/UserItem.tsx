import React from 'react';
import { IUserItem } from './UserItem.model';
import { useHistory } from 'react-router-dom';
import {
    StyledContainer,
    StyledIcon,
    StyledName,
    StyledIconWrapper
} from './UserItem.styled';

const UserItem = ({ name, ...props }: IUserItem) => {
    const history = useHistory();
    const handleOnClick = () => history.push(`${name}`);

    return (
        <StyledContainer onClick={handleOnClick} {...props}>
            <StyledIconWrapper>
                <StyledIcon icon={'user-alt'} />
            </StyledIconWrapper>
            <StyledName> { name } </StyledName>
        </StyledContainer>
    );
};

export default UserItem;

