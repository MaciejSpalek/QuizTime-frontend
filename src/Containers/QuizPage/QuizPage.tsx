import React, { ChangeEvent, useEffect, useState } from 'react';
import { axiosInstance } from 'services/api';
import PageTemplate from 'templates/PageTemplate';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

type Match = {
    id: string;
    username: string;
};

const QuizPage = ({ match }: RouteComponentProps<Match>): JSX.Element => {
    const [quiz, setQuiz] = useState<IQuizTemplate | null>(null);
    const [isFetch, setIsFetch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();

    const getId = () => match.params.id;
    const getName = () => match.params.username;

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
    }


    const getFormChildren = (
        handleChange: (e: ChangeEvent<HTMLElement>) => void, 
        handleBlur: (e: ChangeEvent<HTMLElement>) => void, 
        values: any,
        errors: any,
        ) => {
        const lastStep = <LastStep errors={errors}  values={values} />
        const newArray = quiz?.questions?.map(({ _id, answers, content }, index) =>
            <QuestionStep
                index={index}
                answers={answers}
                content={content}
                values={values}
                handleBlur={handleBlur}
                handleChange={handleChange}
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
                    isOpen ?
                        <Formik
                            validateOnChange={true}
                            initialValues={{ answers: [] }}
                            validationSchema={quizPageValidation}
                            onSubmit={(data, { setSubmitting }) => {
                                console.log(data)
                            }}>
                            {({
                                handleChange,
                                isSubmitting,
                                handleSubmit,
                                handleBlur,
                                touched,
                                values,
                                errors
                            }) => (
                                    <StyledMultiStepForm
                                        children={getFormChildren(handleChange, handleBlur, values, errors)}
                                        handleRightButton={() => setStep(prev => prev + 1)}
                                        handleLeftButton={() => setStep(prev => prev - 1)}
                                        onSubmit={handleSubmit}
                                        counter={step}
                                    />
                                )}
                        </Formik> :
                        <StartStep
                            onClick={() => setIsOpen(true)}
                            colors={quiz.colors}
                            icon={quiz.iconName}
                            title={quiz.title}
                        /> :
                    <ErrorPage /> :
                <PreloaderScreen />}
        </PageTemplate >
    );
};

export default QuizPage;