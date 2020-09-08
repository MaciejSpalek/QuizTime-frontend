import React from 'react'
import { 
    StyledContainer,
    StyledUserTag
} from './index.styled'
import Button from '../../atoms/Button'


type Props = {
   username: string | null
   isLoggedUserRoute: any
}

 const ProfileBar= ({ username, isLoggedUserRoute }: Props)=> {
    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() && <Button text="New quiz" isWidthExtend={false}/>}
        </StyledContainer>
    )
}

export default ProfileBar
