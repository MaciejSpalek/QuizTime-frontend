import React from 'react'
import { 
    StyledContainer,
    StyledUserTag
} from './index.styled'
import Button from '../../atoms/Button'
import Link from '../../atoms/Link'

type Props = {
   username: string | null
   isLoggedUserRoute: any
}

 const ProfileBar = ({ username, isLoggedUserRoute }: Props)=> {
    return (
        <StyledContainer>
            <StyledUserTag> {username} </StyledUserTag>
            {isLoggedUserRoute() && <Button text="New quiz" isWidthExtend={false}/>}
            {/* {isLoggedUserRoute() && <Link text="New quiz" type="link" to={`/cokolwiek/add-quiz`}/>} */}
            

        </StyledContainer>
    )
}

export default ProfileBar
