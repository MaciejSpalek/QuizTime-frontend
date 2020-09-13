import React from 'react'
import { 
    StyledContainer,
    StyledUserTag
} from './index.styled'
import Button from '../../atoms/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setAddQuizButtonStatus } from '../../../redux/Actions/statusesActions'
type Props = {
   username: string | null
   isLoggedUserRoute: any
}

 const ProfileBar = ({ username, isLoggedUserRoute }: Props)=> {
    const dispatch = useDispatch()
    const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus)

    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() 
                &&  <Button 
                        text="New quiz" 
                        isWidthExtend={false} 
                        handleOnClick={()=>dispatch(setAddQuizButtonStatus(!addQuizButtonStatus))}
                    />}            
        </StyledContainer>
    )
}

export default ProfileBar
