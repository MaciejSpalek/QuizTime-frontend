import React from 'react'
import Button from 'Components/atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { StyledContainer, StyledUserTag } from './index.styled';

type Props = {
    username: string | null
    isLoggedUserRoute: any,
    setIsModalWindowOpen: () => void;
}

const ProfileBar = ({ username, isLoggedUserRoute, setIsModalWindowOpen }: Props) => {
    const dispatch = useDispatch()
    const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);

    const handleButton = () => {
        if (addQuizButtonStatus) {
            setIsModalWindowOpen();
        } else {
            dispatch(setAddQuizButtonStatus(!addQuizButtonStatus))
        }
    }

    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() &&
                <Button
                    text={addQuizButtonStatus ? 'QuizBoard' : 'Add quiz'}
                    handleOnClick={handleButton}
                />}
        </StyledContainer>
    )
}

export default ProfileBar;