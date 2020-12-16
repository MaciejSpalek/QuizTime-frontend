import React, { ChangeEvent, useEffect, useState } from 'react';
import { axiosInstance } from 'services/api';
import PageTemplate from 'templates/PageTemplate';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToastParameters } from 'redux/Actions/toastActions';
import ErrorPage from 'Containers/ErrorPage';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import { StyledMultiStepForm } from './QuizPage.styled';
import StartStep from 'Components/molecules/StartStep';
import LastStep from 'Components/molecules/LastStep';
import QuestionStep from 'Components/molecules/QuestionStep';
import { quizPageValidation } from './validation';
import { Formik } from 'formik';
import { IValues, TQuizPage } from './QuizPage.model';
import ScoreWindow from 'Components/molecules/ScoreWindow';
import { setCorrectAnswersArray, setUserAnswersArray } from 'redux/Actions/quizActions';
import { RootState } from 'redux/store';

const QuizPage = ({ match }: TQuizPage): JSX.Element => {
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [quiz, setQuiz] = useState<IQuizTemplate | null>(null);
    const [isFetch, setIsFetch] = useState(false);
    const [isTheQuizOpen, setIsTheQuizOpen] = useState(false);
    const [isTheQuizSolved, setIsTheQuizSolved] = useState(false);
    const [step, setStep] = useState(1);
    const [score, setScore] = useState('');
    const dispatch = useDispatch();

    const getId = () => match.params.id;
    const getName = () => match.params.username;

    const resetQuiz = () => {
        setIsTheQuizSolved(false);
        setScore('');
        setStep(1);
    } ;

    const addScore = (score: string, quizID: string, executor: string) => axiosInstance.post('/quizes/addScore', { score, quizID, executor })

    const fetchQuiz = async (id: string, author: string) => {
        await axiosInstance.get('/quizes/singleQuiz', {
            params: { id, author }
        }).then(res => {
            setIsFetch(true);
            res.data.message ?
                dispatch(setToastParameters(true, res.data.message, 'exclamation-circle')) :
                setQuiz(res.data);
        }).catch(error => {
            const errorMessage = { ...error.response }.data.message;
            dispatch(setToastParameters(true, errorMessage, 'exclamation-circle'));
            setIsFetch(true);
        })
    };

    const getScore = (data: IValues, amountOfQuestions: number) => {
        const correctAnswersArray: any = quiz?.questions?.map(question => question.answers.find(answer => answer.isCorrect )).map(answer => answer?.option);
        const userAnswersArray = data.answers;
        const amountOfCorrectAnswers = userAnswersArray.filter((answer, index) => correctAnswersArray && answer === correctAnswersArray[index]).length;
        dispatch(setCorrectAnswersArray(correctAnswersArray));
        dispatch(setUserAnswersArray(userAnswersArray));
        
        return `${amountOfCorrectAnswers}/${amountOfQuestions}`;
    };


    const onSubmit = (
        data: IValues,
        amountOfQuestions: number,
        setSubmitting: (isSubmitting: boolean) => void,
        resetForm: () => void
    ) => {
        setSubmitting(true)
        const didSelectAllQuestions = () => data.answers.filter(el => el).length >= amountOfQuestions;
        if (didSelectAllQuestions()) {
            const tempScore = getScore(data, amountOfQuestions);
            dispatch(setToastParameters(true, 'Successfuly done!'));
            resetForm();
            setIsTheQuizSolved(true);
            setIsTheQuizOpen(false);
            setScore(tempScore)
            loggedUser && addScore(tempScore, getId(), loggedUser);
        } else {
            dispatch(setToastParameters(true, `Answer all questions...`, 'exclamation-circle'));
            setTimeout(() => {
                setSubmitting(false);
            }, 3000);
        }
    };

   

    const getFormChildren = (
        handleChange: (e: ChangeEvent<HTMLElement>) => void,
        handleBlur: (e: ChangeEvent<HTMLElement>) => void,
        isSubmitting: boolean,
        values: IValues
    ) => {
        const lastStep = <LastStep isSubmitting={isSubmitting} />
        const newArray = quiz?.questions?.map(({ _id, answers, content }, index) =>
            <QuestionStep
                handleChange={handleChange}
                handleBlur={handleBlur}
                answers={answers}
                content={content}
                readonly={false}
                values={values}
                index={index}
                key={_id}
            />
        );
        if (typeof newArray !== "undefined") {
            return [...newArray, lastStep];
        } else {
            return [];
        }
    };

    useEffect(() => {
        fetchQuiz(getId(), getName());
    }, []);

    return (
        <PageTemplate>
            {isFetch ?
                quiz ?
                    isTheQuizOpen ?
                        <Formik
                            validateOnChange={true}
                            initialValues={{ answers: [] }}
                            validationSchema={quizPageValidation}
                            onSubmit={(data, { setSubmitting, resetForm }) => {
                                onSubmit(data, +`${quiz.amountOfQuestions}`, setSubmitting, resetForm)
                            }}>
                            {({
                                handleChange,
                                isSubmitting,
                                handleSubmit,
                                handleBlur,
                                values
                            }) => (
                                    <StyledMultiStepForm
                                        children={getFormChildren(handleChange, handleBlur, isSubmitting, values)}
                                        handleRightButton={() => setStep(prev => prev + 1)}
                                        handleLeftButton={() => setStep(prev => prev - 1)}
                                        onSubmit={handleSubmit}
                                        counter={step}
                                    />
                                )}
                        </Formik> :
                        (isTheQuizSolved ?
                            <ScoreWindow 
                                score={score} 
                                questions={quiz.questions} 
                                closeTheQuiz={resetQuiz}
                                quizID={getId()}
                            /> :
                            <StartStep
                                onClick={() => setIsTheQuizOpen(true)}
                                colors={quiz.colors}
                                icon={quiz.iconName}
                                title={quiz.title}
                            />) :
                    <ErrorPage /> :
                <PreloaderScreen />}
        </PageTemplate >
    );
};

export default QuizPage;