import React, {useEffect, useState} from 'react'
import PageTemplate from '../templates/PageTemplate'
// import api from '../services/api'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import ProfileBar from '../Components/molecules/ProfileBar'
import { axiosInstance } from '../services/api'

type Props = { match: any }

const ProfilePage: React.FC<Props> = ({ match }) => {
  const [ username, setUsername ] = useState(null)
  const [ doesUserExist, setDoesUserExist ] = useState(false)
  const [ requestStatus, setRequestStatus ] = useState(false)
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser)

  const isLoggedUserRoute = ()=> {
    const route = match.params.username
    return loggedUser === route
  }

  const manageUser = async ()=> {
    const route = match.params.username; 
    try {
      await axiosInstance.get('/users/singleuser', {
        params: { username: route }
      })
      setDoesUserExist(true)
      setRequestStatus(true)
      setUsername(route)
    } catch {
      setDoesUserExist(false)
      setRequestStatus(true)
    }
  }

  useEffect(() => {
    manageUser()
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