import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ProfileBar from 'Components/molecules/ProfileBar/ProfileBar';
import QuizList from 'Components/molecules/QuizzesList/QuizzesList';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import MultiStepForm from 'Components/organisms/MultiStepForm';
import ThumbnailStep from 'Components/molecules/ThumbnailStep';
import ModalWindow from 'Components/molecules/ModalWindow';
import AddingStep from 'Components/molecules/AddingStep';
import SubmitStep from 'Components/molecules/SubmitStep';
import ErrorPage from 'Containers/ErrorPage';
import { IFormColor, IFormQuestion, IQuizTemplate } from 'Interfaces/quizInterfaces';
import { StyledWrapper, StyledStepWrapper } from './ProfilePage.styled';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { answers, IErrors, IFormikValues } from './ProfilePage.model';
import { setToastParameters } from 'redux/Actions/toastActions';
import { Formik, FormikErrors, FormikValues } from 'formik';
import { setFormCounter } from 'redux/Actions/quizActions';
import { resetParameters } from 'helpers/reduxHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { profilePageValidation } from './validation';
import { axiosInstance } from 'services/api';
import { RootState } from 'redux/store';
import { useWindowSize } from 'hooks';
import Placeholder from 'templates/PlaceholderTemplate';
import { StyledPlaceholderText } from 'Components/molecules/SubmitStep/SubmitStep.styled';
import { RouteComponentProps } from 'react-router-dom';

type Match = { username: string }

const ProfilePage = ({ match }: RouteComponentProps<Match>) => {
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.statuses.addQuizButtonStatus);
  const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizes.formQuestions);
  const formPageCounter = useSelector<RootState, number>(state => state.quizes.formCounter);
  const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
  const formColors = useSelector<RootState, IFormColor>(state => state.quizes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizes.formIconName);
  const [isModalActive, setIsModalActive] = useState(false);
  const [doesUserExist, setDoesUserExist] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [username, setUsername] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const dispatch = useDispatch();
  const width = useWindowSize();

  const addQuiz = (data: IQuizTemplate) => axiosInstance.post('/quizes/addQuiz', data);
  const isLoggedUserRoute = () => loggedUser === match.params.username;
  const handleCancel = () => setIsModalActive(false);

  const getData = (title: string): IQuizTemplate => {
    return {
      title,
      author: `${loggedUser}`,
      iconName: `${formIconName}`,
      amountOfQuestions: formQuestions.length,
      questions: formQuestions,
      colors: {
        primary: formColors.primary,
        secondary: formColors.secondary
      }
    };
  };


  const manageUser = useCallback(async () => {
    const route = match.params.username;
    await axiosInstance.get('/user/singleUser', {
      params: { 'name': route }
    }).then(({ data }) => {
      if (data) {
        setDoesUserExist(true);
        setUsername(data.name);
        setTimeout(() => {
          setIsFetched(true);
        }, 500);
      } else {
        setDoesUserExist(false);
        setIsFetched(true);
      }
    })
  }, [match.params.username]);

  const fetchUserQuizzes = useCallback(async () => {
    const route = match.params.username;
    await axiosInstance.get('/quizes/userQuizzes', {
      params: { 'author': route }
    }).then(({ data }) => { setQuizzes(data) });
  }, [match.params.username, setQuizzes]);

  const getChildren = (
    handleChange: (e: ChangeEvent) => void,
    handleBlur: (e: ChangeEvent) => void,
    resetForm: () => void,
    isSubmitting: boolean,
    values: IFormikValues,
    errors: FormikErrors<IErrors>,
    touched: FormikValues
  ) => {
    if (width <= 850) {
      return [
        <ThumbnailStep
          handleBlur={handleBlur}
          handleChange={handleChange}
          values={values}
          errors={errors}
          touched={touched}
        />,
        <AddingStep
          handleBlur={handleBlur}
          handleChange={handleChange}
          resetForm={resetForm}
          values={values}
          errors={errors}
          touched={touched}
        />,
        <SubmitStep
          values={values}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
        />
      ]
    } else {
      return [
        <StyledStepWrapper>
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
        </StyledStepWrapper>,
        <SubmitStep
          values={values}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
        />
      ]
    }
  };


  const handleConfirm = () => {
    dispatch(setAddQuizButtonStatus(!addQuizButtonStatus));
    resetParameters(dispatch);
    setIsModalActive(false);
  };

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
      {isFetched ?
        doesUserExist ?
          <StyledWrapper>
            <ProfileBar
              username={username}
              isLoggedUserRoute={isLoggedUserRoute}
              openModal={() => setIsModalActive(true)}
            />
            {!addQuizButtonStatus ?
              <QuizList quizzes={quizzes} /> :
              <Formik
                validateOnChange={true}
                initialValues={{
                  title: '',
                  question: '',
                  radioValue: 'A',
                  answers
                }}
                validationSchema={profilePageValidation(formPageCounter, width)}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  addQuiz(getData(data.title)).then(res => {
                    setSubmitting(true);
                    console.log(res)
                    if (res.data.message) {
                      dispatch(setToastParameters(true, 'Add at least 5 questions...', 'exclamation-circle'))
                      setTimeout(() => {
                        setSubmitting(false);
                      }, 3000);
                    } else {
                      dispatch(setToastParameters(true, 'Successfully added!'))
                      setTimeout(() => {
                        resetForm();
                        setSubmitting(false);
                        resetParameters(dispatch);
                      }, 500);
                    }
                  })
                }}>
                {({
                  handleChange,
                  isSubmitting,
                  handleSubmit,
                  handleBlur,
                  resetForm,
                  touched,
                  values,
                  errors
                }) => (
                  <MultiStepForm
                    onSubmit={handleSubmit}
                    handleLeftButton={() => dispatch(setFormCounter(formPageCounter - 1))}
                    handleRightButton={() => dispatch(setFormCounter(formPageCounter + 1))}
                    counter={formPageCounter}>
                    {getChildren(handleChange, handleBlur, resetForm, isSubmitting, values, errors, touched)}
                  </MultiStepForm>
                )}
              </Formik>}
          </StyledWrapper> :
          <ErrorPage /> :
        <PreloaderScreen />
      }
      <ModalWindow
        description='Wanna exit?'
        isActive={isModalActive}
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </PageTemplate >
  );
};

export default ProfilePage;