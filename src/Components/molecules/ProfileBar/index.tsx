import React from 'react'
import { 
    StyledContainer,
    StyledUserTag
} from './index.styled'
import Button from '../../atoms/Button'


interface Props {
   username: string | null
   isLoggedUserRoute: any
}

 const ProfileBar: React.FC<Props> = ({ username, isLoggedUserRoute })=> {
    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() && <Button text="New quiz" isWidthExtend={false}/>}
        </StyledContainer>
    )
}

export default ProfileBar
