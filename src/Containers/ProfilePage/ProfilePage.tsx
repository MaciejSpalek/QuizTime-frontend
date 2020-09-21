import React, { useEffect, useState } from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../../services/api'
import { StyledWrapper } from './ProfilePage.styled'
import { routes } from '../../routes/index'
import ProfileBar from '../../Components/molecules/ProfileBar'
import PlaceholderTemplate from '../../templates/PlaceholderTemplate/PlaceholderTemplate'
import PageTemplate from '../../templates/PageTemplate/PageTemplate'
import Spinner from '../../Components/atoms/Spinner/index'
import BugSVG from '../../assets/Bug.svg'
import Image from '../../Components/atoms/Image'
import QuizWrapper from '../../Components/organisms/QuizesWrapper/index'
import QuizList from '../../Components/molecules/QuizesList/index'
import tempImage from '../../assets/Person.svg'
import AddQuizWrapper from '../../Components/organisms/AddQuizWrapper'


type Props = { match: any }

const tempQuizes = [
  { id: 1, name: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12" },
  { id: 2, name: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12" },
  { id: 3, name: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12" },
  { id: 4, name: "Zwierzęta", author: "Maciora", isDone: true, image: tempImage, score: "5/12" }
]

const ProfilePage = ({ match }: Props) => {
  // const [ username, setUsername ] = useState(null) // api
  const [username, setUsername] = useState("maciora") // fake

  const [doesUserExist, setDoesUserExist] = useState(false)
  const [requestStatus, setRequestStatus] = useState(false)
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser)
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus)

  const isLoggedUserRoute = () => {
    return true // fake
    // const route = match.params.username
    // return loggedUser === route // api
  }

  const manageUser = async () => {
    const route = match.params.username;
    try {
      await axiosInstance.get('/users/singleuser', {
        params: { username: route }
      })
      setDoesUserExist(true)
      setRequestStatus(true)
      setUsername(route)
    } catch {
      // setDoesUserExist(false) // api
      setDoesUserExist(true) // fake
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
          <StyledWrapper>
            <ProfileBar username={username} isLoggedUserRoute={isLoggedUserRoute} />
            {!addQuizButtonStatus ? <QuizList quizes={tempQuizes} /> : <AddQuizWrapper />}
          </StyledWrapper>
          :
          <PlaceholderTemplate>
            <h2> User doesn't exist </h2>
            <Image
              url={BugSVG}
              alt="Error icon"
              width="80px"
              height="80px"
              margin="10px 0 0 0"
            />
          </PlaceholderTemplate>
        :
        <PlaceholderTemplate>
          <Spinner />
        </PlaceholderTemplate>}
    </PageTemplate>
  )
}

export default ProfilePage