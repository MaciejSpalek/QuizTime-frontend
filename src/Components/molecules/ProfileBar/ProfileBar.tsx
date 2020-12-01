import React from 'react'
import Button from 'Components/atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { StyledContainer, StyledUserTag } from './ProfileBar.styled';
import { IProfileBar } from './ProfileBar.model';

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
                    text={addQuizButtonStatus ? 'QuizBoard' : 'Add quiz'}
                    handleOnClick={handleButton}
                />}
        </StyledContainer>
    );
};

export default ProfileBar;