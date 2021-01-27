import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ProfileBar from 'Components/molecules/ProfileBar/ProfileBar';
import QuizList from 'Components/organisms/QuizzesList/QuizzesList';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import MultiStepForm from 'Components/organisms/MultiStepForm';
import ModalWindow from 'Components/molecules/ModalWindow';
import ErrorPage from 'Pages/ErrorPage';

import { StyledWrapper, StyledStepWrapper,StyledPreloaderScreen } from './ProfilePage.styled';
import { AddingStep, ThumbnailStep, SubmitStep } from 'Components/organisms/PanelSteps';
import { answers, IErrors, IFormikValues, MatchParameters } from './ProfilePage.model';
import { IFormColor, IFormQuestion, IQuizTemplate } from 'Interfaces/quizInterfaces';
import { addQuiz, fetchSingleUser, fetchUserQuizzes } from 'services/requests';
import { setAddQuizButtonStatus } from 'redux/Actions/statusActions';
import { setToastParameters } from 'redux/Actions/toastActions';
import { Formik, FormikErrors, FormikValues } from 'formik';
import { resetParameters } from 'helpers/reduxHandlers';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { profilePageValidation } from './validation';
import { showCookie } from 'helpers/cookies';
import { RootState } from 'redux/store';
import { useWindowSize } from 'hooks';

const ProfilePage = ({ match }: RouteComponentProps<MatchParameters>) => {
  const addQuizButtonStatus = useSelector<RootState, boolean>(state => state.status.addQuizButtonStatus);
  const formQuestions = useSelector<RootState, IFormQuestion[]>(state => state.quizzes.formQuestions);
  const loggedUser = useSelector<RootState, string | null>(state => state.session.loggedUser);
  const formColors = useSelector<RootState, IFormColor>(state => state.quizzes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizzes.formIconName);
  const [isModalActive, setIsModalActive] = useState(false);
  const [doesUserExist, setDoesUserExist] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [username, setUsername] = useState(null);
  const [token] = useState(showCookie('token'));
  const [quizzes, setQuizzes] = useState([]);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const width = useWindowSize();



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
    fetchSingleUser(route).then(({ data }) => {
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

  const setUserQuizzes = useCallback(async () => {
    const route = match.params.username;
    fetchUserQuizzes(route).then(({ data }) => { setQuizzes(data) });
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
          key="ThumbnailStep"
        />,
        <AddingStep
          handleBlur={handleBlur}
          handleChange={handleChange}
          resetForm={resetForm}
          values={values}
          errors={errors}
          touched={touched}
          key="AddingStep"
        />,
        <SubmitStep
          values={values}
          errors={errors}
          touched={touched}
          isSubmitting={isSubmitting}
          key="SubmitStep"
        />
      ]
    } else {
      return [
        <StyledStepWrapper key="StyledStepWrapper">
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
          key="SubmitStep"
        />
      ]
    }
  };

  const onSubmit = (
    data: IFormikValues,
    setSubmitting: (value: boolean) => void,
    resetForm: () => void
  ) => {
    addQuiz(getData(data.title), token).then(res => {
      setSubmitting(true);
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
  };

  const handleConfirm = () => {
    dispatch(setAddQuizButtonStatus(!addQuizButtonStatus));
    resetParameters(dispatch);
    setIsModalActive(false);
  };

  useEffect(() => {
    dispatch(setAddQuizButtonStatus(false));
    setUserQuizzes();
    manageUser();
  }, [loggedUser, dispatch, manageUser, setUserQuizzes]);

  useEffect(() => {
    setUserQuizzes();
  }, [addQuizButtonStatus, setUserQuizzes]);

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
              <QuizList quizzes={quizzes} matchUsername={match.params.username} /> :
              <Formik
                validateOnChange={true}
                initialValues={{
                  title: '',
                  question: '',
                  radioValue: 'A',
                  answers
                }}
                validationSchema={profilePageValidation(step, width)}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  onSubmit(data, setSubmitting, resetForm);
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
                    callback={(step)=> setStep(step)}>
                    {getChildren(
                      handleChange,
                      handleBlur,
                      resetForm,
                      isSubmitting,
                      values,
                      errors,
                      touched
                    )}
                  </MultiStepForm>
                )}
              </Formik>}
          </StyledWrapper> :
          <ErrorPage /> :
        <StyledPreloaderScreen />
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