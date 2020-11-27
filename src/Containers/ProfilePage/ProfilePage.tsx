import React, { useCallback, useEffect, useState } from 'react';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { StyledWrapper } from './ProfilePage.styled';
import { setFormCounter } from 'redux/Actions/quizActions';
import { Formik } from 'formik';
import { answers } from './ProfilePage.model';
import ProfileBar from 'Components/molecules/ProfileBar/ProfileBar';
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
import { IFormColor, IFormQuestion, IQuizTemplate } from 'Interfaces/quizInterfaces';
import { setToastParameters } from 'redux/Actions/toastActions';
import ModalWindow from 'Components/molecules/ModalWindow';
import { resetParameters } from 'helpers/reduxHandlers';

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
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);
  const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
  const formPageCounter = useSelector<RootState, number>(state => state.quizes.formCounter);
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
  const formColors = useSelector<RootState, IFormColor>(state => state.quizes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizes.formIconName);
  const [isModalActive, setIsModalActive] = useState(false);
  const [doesUserExist, setDoesUserExist] = useState(false);
  const [requestStatus, setRequestStatus] = useState(false);
  const [username, setUsername] = useState(null);
  const [quizes, setQuizes] = useState([]);
  const dispatch = useDispatch();
  

  const getData = (title: string): IQuizTemplate => {
    return {
      title,
      author: `${loggedUser}`,
      iconName: `${formIconName}`,
      amountOfQuestions: formQuestions.length,
      questions: formQuestions,
      colors: {
        primary: formColors.primary,
        secondary: formColors.secondary,
      }
    };
  };

  const isLoggedUserRoute = () => {
    const route = match.params.username;
    return loggedUser === route;
  }

  const manageUser =  useCallback(async () => {
    const route = match.params.username;
    await axiosInstance.get('/user/singleUser', {
      params: { 'name': route }
    }).then(({ data }) => {
      if (data) {
        setDoesUserExist(true);
        setRequestStatus(true);
        setUsername(data.name);
      } else {
        setDoesUserExist(false);
        setRequestStatus(true);
      }
    })
  }, [match.params.username])

  const fetchUserQuizzes =  useCallback(async () => {
    const route = match.params.username;
    await axiosInstance.get('/quizes/userQuizzes', {
      params: { 'author': route }
    }).then(({ data }) => { setQuizes(data) });
  }, [match.params.username, setQuizes])


  const handleCancel = () => setIsModalActive(false);
  const handleConfirm = () => {
    dispatch(setAddQuizButtonStatus(!addQuizButtonStatus));
    resetParameters(dispatch);
    setIsModalActive(false);
  }


  const addQuiz = (data: IQuizTemplate) => {
    return axiosInstance.post('/quizes/addQuiz', data);
  }

 

  useEffect(() => {
    dispatch(setAddQuizButtonStatus(false));
    fetchUserQuizzes();
    manageUser();
  }, [loggedUser, dispatch, manageUser, fetchUserQuizzes]);

  useEffect(() => {
    fetchUserQuizzes();
  }, [addQuizButtonStatus, fetchUserQuizzes]);


  return (
    <PageTemplate>
      {requestStatus ?
        doesUserExist ?
          <StyledWrapper>
            <ProfileBar
              username={username}
              isLoggedUserRoute={isLoggedUserRoute}
              openModal={()=> setIsModalActive(true)}
            />
            {!addQuizButtonStatus ?
              <QuizList quizes={quizes} /> :
              <Formik
                validateOnChange={true}
                initialValues={{
                  title: '',
                  question: '',
                  radioValue: 'A',
                  answers
                }}
                validationSchema={validationSchema(formPageCounter)}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  addQuiz(getData(data.title)).then(res => {
                    setSubmitting(true);

                    if (res.data.message) {
                      dispatch(setToastParameters(true, 'Add at least 5 questions...', 'exclamation-circle'))
                      setTimeout(() => {
                        setSubmitting(false)
                      }, 3000);
                    } else {
                      dispatch(setToastParameters(true, 'Successfully added!'))
                      setTimeout(() => {
                        resetForm();
                        setSubmitting(false)
                        resetParameters(dispatch);
                      }, 500);
                    }
                  })
                }}>
                {({
                  isSubmitting,
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
                      counter={formPageCounter}>
                      <ThumbnailStep
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        values={values}
                        errors={errors}
                        touched={touched}
                      />
                      <AddingStep
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                        resetForm={resetForm}
                        values={values}
                        errors={errors}
                        touched={touched}
                      />
                      <SubmitStep
                        values={values}
                        errors={errors}
                        touched={touched}
                        isSubmitting={isSubmitting}
                      />
                    </MultiStepForm>
                  )}
              </Formik>}
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
      <ModalWindow
        isActive={isModalActive}
        description='Wanna exit?'
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </PageTemplate >
  )
}

export default ProfilePage;