import React, {useEffect, useState} from 'react'
import PageTemplate from '../templates/PageTemplate'
import api from '../services/api'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

type Props = {
  history: any
  match: any
}

const ProfilePage: React.FC<Props> = ({ match }) => {
  const [ username, setUsername ] = useState(null)
  const [ doesUserExist, setDoesUserExist ] = useState(true)
  const [ requestStatus, setRequestStatus ] = useState(false)
  // const [ users ] = useState(["maciu1", "maciu2", "maciu3"])
  
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser)

  const isLoggedUserProfile = ()=> {
    const usernameMatch = match.params.username
    return loggedUser === usernameMatch
  }

  // const doesExistUser = ()=> {
  //   const matchUsername = match.params.username
  //   return users.includes(matchUsername)
  // }

  useEffect(() => {
    // console.log("user exist:", doesExistUser())
    // console.log("Your profile: ", isLoggedUserProfile())
    // console.log(username)

    api.get(`/users/singleuser?username=${match.params.username}`)
      .then(res => {
        setRequestStatus(true)
        if(res.ok) {
            setDoesUserExist(true)
            return res.json()
        } else {
            // setDoesUserExist(false)
            setUsername(match.params.username)

            throw new Error(res.statusText)
        }}).then(res => {
            const { username: responseUsername } = res
            setUsername(responseUsername)
        }).catch(error => console.error(error))
  }, [loggedUser])


  return (
    <PageTemplate>
      {requestStatus ? 
        doesUserExist ? 
          <>
            <h2> {username} </h2> 
            {isLoggedUserProfile() && <button> New quiz </button> }
          </> 
            : <h2> User doesn't exist </h2>
              : <span> loading... </span>}
    </PageTemplate>  
  )
}  

export default ProfilePage