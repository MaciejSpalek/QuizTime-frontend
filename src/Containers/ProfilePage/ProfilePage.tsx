import React, { useEffect, useState } from 'react'
import { RootState } from 'redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from 'services/api'
import { StyledWrapper } from './ProfilePage.styled'
import ProfileBar from 'Components/molecules/ProfileBar'
import PlaceholderTemplate from 'templates/PlaceholderTemplate/PlaceholderTemplate'
import PageTemplate from 'templates/PageTemplate/PageTemplate'
import Spinner from 'Components/atoms/Spinner/index'
import BugSVG from 'assets/Bug.svg'
import Image from 'Components/atoms/Image'
import QuizList from 'Components/molecules/QuizesList/index'
import MultiStepForm from 'Components/organisms/MultiStepWrapper'
import { setFormCounter } from 'redux/Actions/quizActions'
import ThumbnailPart from 'Components/molecules/ThumbnailForm'
import QuestionPart from 'Components/molecules/QuestionPart'
import { Formik } from 'formik'
import yup from 'yup';

type Props = { match: any }

const tempQuizes = [
  { id: 1, name: "Example 1", author: "Maciora", isDone: true, score: "5/12", color: { primary: "#00D952", secondary: "#00a03d" }, iconName: 'male' },
  { id: 2, name: "Example 2", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#80D4CD', secondary: '#2982A2' }, iconName: 'gamepad' },
  { id: 3, name: "Example 3", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#99B3E1', secondary: '#4F62A3' }, iconName: 'film' },
  { id: 4, name: "Example 4", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#A0ADBD', secondary: '#372E46' }, iconName: 'flask' },
  { id: 5, name: "Example 5", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#ACA398', secondary: '#443C51' }, iconName: 'paw' },
  { id: 6, name: "Example 6", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#ECCE8D', secondary: '#2C1931' }, iconName: 'landmark' },
  { id: 7, name: "Example 7", author: "Maciora", isDone: true, score: "5/12", color: { primary: '#F7BC14', secondary: '#201F26' }, iconName: 'music' }
];

// const validationSchema = yup.object({
//   title: yup.string()
//     .required('Required')
//     .min(3, 'Username must be at least 3 characters')
//     .max(15, 'Username can be maximum 15 characters'),

//   color: yup.string()
//     .required('Required'),

//   iconName: yup.string()
//     .required('Required'),

//   question: yup.string()
//     .required('Required'),

//   answerA: yup.string()
//     .required('Required'),

//   answerB: yup.string()
//     .required('Required'),

//   answerC: yup.string()
//     .required('Required'),

//   answerD: yup.string()
//     .required('Required')
// });

const ProfilePage = ({ match }: Props) => {
  const dispatch = useDispatch()
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus)
  const formPageCounter = useSelector<RootState, number>(state => state.quizes.formCounter)
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser)

  const [doesUserExist, setDoesUserExist] = useState(true) //fake
  const [requestStatus, setRequestStatus] = useState(true) //fake
  const [username, setUsername] = useState("maciora") // fake

  // const [doesUserExist, setDoesUserExist] = useState(false) //api
  // const [requestStatus, setRequestStatus] = useState(false) //api
  // const [ username, setUsername ] = useState(null) // api

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
            {!addQuizButtonStatus ?
              <QuizList quizes={tempQuizes} /> :
              // <Formik
              //   validationSchema={validationSchema}
              //   validateOnChange={true}
              //   initialValues={{
              //     title: "",
              //     iconName: "",
              //     color: {
              //       primary: "black",
              //       secondary: "blue"
              //     }
              //   }}
              //   onSubmit={(data, { setSubmitting, resetForm }) => {
              //     setSubmitting(true);
              //     setTimeout(() => {
              //       resetForm()
              //       setSubmitting(false)
              //     }, 2000)
              //   }}>
              //   {({
              //     isSubmitting,
              //     handleSubmit,
              //     handleChange,
              //     handleBlur,
              //     touched,
              //     values,
              //     errors
              //   }) => (
              //  </Formik>}
                    <MultiStepForm
                      counter={formPageCounter}
                      children={[<ThumbnailPart />, <QuestionPart />]}
                      handleLeftButton={() => dispatch(setFormCounter(formPageCounter - 1))}
                      handleRightButton={() => dispatch(setFormCounter(formPageCounter + 1))}
                    />}
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