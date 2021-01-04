import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';
import QuestionStep from 'Components/molecules/QuestionStep';
import ScoreWindow from 'Components/molecules/ScoreWindow';
import StartStep from 'Components/molecules/StartStep';
import LastStep from 'Components/molecules/LastStep';
import PageTemplate from 'templates/PageTemplate';
import ErrorPage from 'Containers/ErrorPage';
import { setCorrectAnswersArray, setUserAnswersArray } from 'redux/Actions/quizActions';
import { IFormColor, IQuizTemplate } from 'Interfaces/quizInterfaces';
import { setToastParameters } from 'redux/Actions/toastActions';
import { StyledMultiStepForm } from './QuizPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { IValues, TQuizPage } from './QuizPage.model';
import { quizPageValidation } from './validation';
import { axiosInstance } from 'services/api';
import { RootState } from 'redux/store';
import { Formik } from 'formik';

const QuizPage = ({ match }: TQuizPage): JSX.Element => {
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [quiz, setQuiz] = useState<IQuizTemplate | null>(null);
    const [isFetch, setIsFetch] = useState(false);
    const [isTheQuizOpen, setIsTheQuizOpen] = useState(false);
    const [isTheQuizSolved, setIsTheQuizSolved] = useState(false);
    const [step, setStep] = useState(1);
    const [score, setScore] = useState('');
    const dispatch = useDispatch();

    const getId = useCallback(() => match.params.id, [match.params.id]);
    const getName = useCallback(() => match.params.username, [match.params.username]);

    const resetQuiz = () => {
        setIsTheQuizSolved(false);
        setScore('');
        setStep(1);
    };

    const addScore = async (score: string, quizID: string, executor: string) => await axiosInstance.post('/quizes/addScore', { score, quizID, executor })
    const updateCounter = async (id: string) => await axiosInstance.put('/quizes/updateCounter', { id })

    const fetchQuiz = useCallback(async (id: string, author: string) => {
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
    }, [dispatch]);

    const getScore = (data: IValues, amountOfQuestions: number) => {
        const correctAnswersArray: any = quiz?.questions?.map(question => question.answers.find(answer => answer.isCorrect)).map(answer => answer?.option);
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
            setScore(tempScore);
            updateCounter(getId());
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
        values: IValues,
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
    }, [fetchQuiz, getId, getName]);

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
                            /> :
                            <StartStep
                                onClick={() => setIsTheQuizOpen(true)}
                                colors={quiz.colors}
                                icon={quiz.iconName}
                                title={quiz.title}
                                author={quiz.author}
                                counter={quiz.counter}
                            />) :
                    <ErrorPage /> :
                <PreloaderScreen />}
        </PageTemplate >
    );
};

export default QuizPage;