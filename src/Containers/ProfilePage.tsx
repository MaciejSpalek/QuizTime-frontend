import React, {useEffect, useState} from 'react'
import PageTemplate from '../templates/PageTemplate'
import api from '../services/api'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import ProfileBar from '../Components/molecules/ProfileBar'

type Props = {
  history: any
  match: any
}

const ProfilePage: React.FC<Props> = ({ match }) => {
  const [ username, setUsername ] = useState(null)
  const [ doesUserExist, setDoesUserExist ] = useState(false)
  const [ requestStatus, setRequestStatus ] = useState(false)
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser)

  const isLoggedUserRoute = ()=> {
    const usernameMatch = match.params.username
    return loggedUser === usernameMatch
  }

  useEffect(() => {
    api.get(`/quiz/all`)
      .then(res => {
        if(res.ok) {
          // setDoesUserExist(true)
          // setRequestStatus(true)
          return res.json()
        } else {
            // setDoesUserExist(false)
            // setUsername(match.params.username) //fake

            throw new Error(res.statusText)
        }}).then(res => {
            // const { username: responseUsername } = res
            // setUsername(responseUsername)
            console.log(res)
        }).catch(error => console.error(error))
  }, [loggedUser])


  return (
    <PageTemplate>
      {requestStatus ? 
        doesUserExist ? 
            <ProfileBar 
              username={username}
              isLoggedUserRoute={isLoggedUserRoute}
            />
           
            : <h2> User doesn't exist </h2>
              : <span> loading... </span>}
    </PageTemplate>  
  )
}  

export default ProfilePage