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
  { id: 1, name: "Example 1", author: "Maciora", isDone: true, score: "5/12", color: {primary:"#00D952", secondary:"#00a03d"}, iconName: 'male'},
  { id: 2, name: "Example 2", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#80D4CD', secondary: '#2982A2'}, iconName: 'gamepad'},
  { id: 3, name: "Example 3", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#99B3E1', secondary: '#4F62A3'}, iconName: 'film'},
  { id: 4, name: "Example 4", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#A0ADBD', secondary: '#372E46'}, iconName: 'flask'},  
  { id: 5, name: "Example 5", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#ACA398', secondary: '#443C51'}, iconName: 'paw'},
  { id: 6, name: "Example 6", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#ECCE8D', secondary: '#2C1931'}, iconName: 'landmark'},
  { id: 7, name: "Example 7", author: "Maciora", isDone: true, score: "5/12", color: {primary: '#F7BC14', secondary: '#201F26'}, iconName: 'music'}
];



const ProfilePage = ({ match }: Props) => {
  // const [ username, setUsername ] = useState(null) // api
  const [username, setUsername] = useState("maciora") // fake

  // const [doesUserExist, setDoesUserExist] = useState(false) //api
  // const [requestStatus, setRequestStatus] = useState(false) //api


  const [doesUserExist, setDoesUserExist] = useState(true) //fake
  const [requestStatus, setRequestStatus] = useState(true) //fake
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