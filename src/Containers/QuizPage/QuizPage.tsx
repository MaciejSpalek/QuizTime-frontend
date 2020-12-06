import React, { useEffect, useState } from 'react';
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


    const getFormChildren = () => {
        const lastStep = <LastStep />
        const newArray = quiz?.questions?.map(({ _id, answers, content }) => (
            <QuestionStep
                answers={answers}
                content={content}
                key={_id}
            />
        )
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
                        <StyledMultiStepForm
                            handleRightButton={() => setStep(prev => prev + 1)}
                            handleLeftButton={() => setStep(prev => prev - 1)}
                            onSubmit={() => console.log("Submit")}
                            children={getFormChildren()}
                            counter={step}
                        /> :
                        <StartStep
                            onClick={() => setIsOpen(true)}
                            colors={quiz.colors}
                            icon={quiz.iconName}
                            title={quiz.title}
                        /> :
                    <ErrorPage /> :
                <PreloaderScreen />}
        </PageTemplate>
    );
};

export default QuizPage;