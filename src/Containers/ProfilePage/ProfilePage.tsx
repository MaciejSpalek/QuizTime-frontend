import React, { useEffect, useState } from 'react';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { StyledWrapper } from './ProfilePage.styled';
import { setFormCounter } from 'redux/Actions/quizActions';
import { Formik } from 'formik';
import { answers, IFormikValues } from './ProfilePage.model';
import ProfileBar from 'Components/molecules/ProfileBar';
import PlaceholderTemplate from 'templates/PlaceholderTemplate/PlaceholderTemplate';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import Spinner from 'Components/atoms/Spinner/index';
import BugSVG from 'assets/Bug.svg';
import Image from 'Components/atoms/Image';
import QuizList from 'Components/molecules/QuizesList/index';
import MultiStepForm from 'Components/organisms/MultiStepWrapper';
import ThumbnailStep from 'Components/molecules/ThumbnailStep';
import AddingStep from 'Components/molecules/AddingStep';
import SubmitStep from 'Components/molecules/SubmitStep';
import * as yup from 'yup';
import { axiosInstance } from 'services/api';
import { IFormColor, IFormQuestion } from 'Interfaces/quizInterfaces';
import ModalWindow from 'Components/molecules/ModalWindow';

type Props = { match: any }

const validationSchema = (formCouter: number) => yup.object({
  title: yup.string()
    .required('Required')
    .min(2, 'min 2 characters')
    .max(15, 'max 15 characters'),

  question: formCouter === 2 ?
    yup.string()
      .required('Required')
      .min(5, 'min 5 characters')
      .max(120, 'max 120 characters') :
    yup.string()
      .min(5, 'min 5 characters')
      .max(120, 'max 120 characters'),

  answers: yup.array().of(
    yup.object().shape({
      content: formCouter === 2 ?
        yup.string()
          .required('Required')
          .min(1, 'Minimum 1 character')
          .max(30, 'max 30 characters') :
        yup.string()
          .min(1, 'Minimum 1 character')
          .max(30, 'max 30 characters')
    })
  )
});

const ProfilePage = ({ match }: Props) => {
  const dispatch = useDispatch();
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);
  const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
  const formPageCounter = useSelector<RootState, number>(state => state.quizes.formCounter);
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
  const formColors = useSelector<RootState, IFormColor>(state => state.quizes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizes.formIconName);

  const [doesUserExist, setDoesUserExist] = useState(false);
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  const [username, setUsername] = useState(null);
  const [quizes, setQuizes] = useState([]);
  



  const getData = (values: IFormikValues) => {
    return {
      title: values.title,
      author: loggedUser,
      iconName: formIconName,
      amountOfQuestions: formQuestions.length,
      questions: formQuestions,
      colors: {
        primary: formColors.primary,
        secondary: formColors.secondary,
      }
    }
  }


  const isLoggedUserRoute = () => {
    const route = match.params.username
    return loggedUser === route
  }

  const manageUser = async () => {
    const route = match.params.username;
    await axiosInstance.get('/user/singleUser', {
      params: { 'name': route }
    }).then(({ data }) => {
      if (data) {
        setDoesUserExist(true)
        setRequestStatus(true)
        setUsername(data.name)
      } else {
        setDoesUserExist(false)
        setRequestStatus(true)
      }
    })
  }

  const fetchQuizes = async () => {
    const route = match.params.username;
    await axiosInstance.get('/quizes/userQuizzes', {
      params: { 'author': route }
    }).then(({ data }) => {setQuizes(data)});
  }


  const handleConfirmButton = () => {
    dispatch(setAddQuizButtonStatus(!addQuizButtonStatus));
    setIsModalWindowOpen(false);
  }

  const handleDeclineButton = () => {
    setIsModalWindowOpen(false)
  }

  useEffect(() => {
    manageUser();
    fetchQuizes();
    dispatch(setAddQuizButtonStatus(false));
  }, [loggedUser])

  useEffect(() => {
    fetchQuizes();
  }, [addQuizButtonStatus])


  return (
    <PageTemplate>
      {requestStatus ?
        doesUserExist ?
          <StyledWrapper>
            <ProfileBar 
              username={username} 
              isLoggedUserRoute={isLoggedUserRoute} 
              setIsModalWindowOpen={() => setIsModalWindowOpen(true)}
            />
            {!addQuizButtonStatus ?
              <QuizList quizes={quizes} /> :
              <Formik
                validateOnChange={true}
                initialValues={{
                  title: '',
                  question: '',
                  radioValue: 'A',
                  answers: answers
                }}
                validationSchema={validationSchema(formPageCounter)}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  axiosInstance.post('/quizes/addQuiz', getData(data));
                }}>
                {({
                  isSubmitting,
                  handleReset,
                  resetForm,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  touched,
                  values,
                  errors
                }) => (
                    <MultiStepForm
                      handleSubmit={handleSubmit}
                      handleLeftButton={() => dispatch(setFormCounter(formPageCounter - 1))}
                      handleRightButton={() => dispatch(setFormCounter(formPageCounter + 1))}
                      counter={formPageCounter}
                      children={[
                        <ThumbnailStep
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          touched={touched}
                          errors={errors}
                        />,
                        <AddingStep
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          resetForm={resetForm}
                          values={values}
                          touched={touched}
                          errors={errors}
                        />,
                        <SubmitStep errors={errors}/>
                      ]}
                    />
                  )}
              </Formik>
            }

          </StyledWrapper> :
          <PlaceholderTemplate>
            <h2> User doesn't exist </h2>
            <Image
              url={BugSVG}
              alt='Error icon'
              width='80px'
              height='80px'
              margin='10px 0 0 0'
            />
          </PlaceholderTemplate> :
        <PlaceholderTemplate>
          <Spinner />
        </PlaceholderTemplate>
      }
      {isModalWindowOpen ? <ModalWindow 
        description="Are you sure, you wanna leave?"
        handleConfirmButton={() => handleConfirmButton()}
        handleDeclineButton={() => handleDeclineButton()}
      /> : null}
    </PageTemplate >
  )
}

export default ProfilePage