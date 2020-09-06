import React, {useEffect, useState} from 'react'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../services/api'
import ProfileBar from '../Components/molecules/ProfileBar'
import PlaceholderTemplate from '../templates/PlaceholderTemplate'
import PageTemplate from '../templates/PageTemplate'
import Spinner from '../Components/atoms/Spinner/index'

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
            : 
              <PlaceholderTemplate>
                <h2> User doesn't exist </h2>
              </PlaceholderTemplate>
              : 
                <PlaceholderTemplate>
                  {/* <span> loading... </span> */}
                  <Spinner />
                </PlaceholderTemplate>}
    </PageTemplate>  
  )
}  

export default ProfilePage