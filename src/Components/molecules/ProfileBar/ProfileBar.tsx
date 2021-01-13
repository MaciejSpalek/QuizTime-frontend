import React from 'react'
import Button from 'Components/atoms/Button/Button';
import { RootState } from 'redux/store';
import { IProfileBar } from './ProfileBar.model';
import { useDispatch, useSelector } from 'react-redux';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import {
    StyledContainer,
    StyledUserTag,
} from './ProfileBar.styled';

const ProfileBar = ({
    username,
    isLoggedUserRoute,
    openModal
}: IProfileBar) => {
    const dispatch = useDispatch()
    const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);

    const handleButton = () => {
        addQuizButtonStatus ?
            openModal() :
            dispatch(setAddQuizButtonStatus(true));
    };

    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() &&
                <Button
                    text={addQuizButtonStatus ? 'Back' : 'New quiz'}
                    handleOnClick={handleButton}
                />}
        </StyledContainer>
    );
};

export default ProfileBar;