import React from 'react'
import Button from 'Components/atoms/Button/Button';
import { RootState } from 'redux/store';
import { IProfileBar } from './ProfileBar.model';
import { useDispatch, useSelector } from 'react-redux';
import { setAddQuizButtonStatus } from 'redux/Actions/statusActions';
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
    const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.status.addQuizButtonStatus);

    const handleButton = () => {
        addQuizButtonStatus ?
            openModal() :
            dispatch(setAddQuizButtonStatus(true));
    };

    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() &&
                <Button handleOnClick={handleButton} >
                    {addQuizButtonStatus ? 'Back' : 'New quiz'}
                </Button>}
        </StyledContainer>
    );
};

export default ProfileBar;