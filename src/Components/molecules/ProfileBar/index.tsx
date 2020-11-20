import React from 'react'
import {
    StyledContainer,
    StyledUserTag
} from './index.styled'
import Button from '../../atoms/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setAddQuizButtonStatus } from '../../../redux/Actions/statusesActions'
type Props = {
    username: string | null
    isLoggedUserRoute: any,
    setIsModalWindowOpen: ()=> void;
}

const ProfileBar = ({ username, isLoggedUserRoute, setIsModalWindowOpen }: Props) => {
    const dispatch = useDispatch()
    const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);

    const handleButton = () => {
        if(addQuizButtonStatus) {
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
                    text={addQuizButtonStatus ? 'Your quizes' : 'Add quiz'}
                    handleOnClick={handleButton}
                />}
        </StyledContainer>
    )
}

export default ProfileBar
