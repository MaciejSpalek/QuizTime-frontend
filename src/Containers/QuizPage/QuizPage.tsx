import React, { useEffect, useState } from 'react';
import { axiosInstance } from 'services/api';
import PageTemplate from 'templates/PageTemplate';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToastParameters } from 'redux/Actions/toastActions';
import MultiStepForm from 'Components/organisms/MultiStepWrapper';
import ErrorPage from 'Containers/ErrorPage';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import PreloaderScreen from 'Components/molecules/PreloaderScreen';

type Match = {
    id: string;
    username: string;
};

const QuizPage = ({ match }: RouteComponentProps<Match>): JSX.Element => {
    const dispatch = useDispatch();
    const [quiz, setQuiz] = useState<IQuizTemplate | null>(null);
    const [step, setStep] = useState(1);
    const [isFetch, setIsFetch] = useState(false);
    const getId = () => match.params.id;

    const doesExistQuiz = async (id: string) => {
        await axiosInstance.get('/quizes/singleQuiz', {
            params: { id }
        }).then(res => {
            setIsFetch(true);
            res.data.message ?
                dispatch(setToastParameters(true, res.data.message, 'exclamation-circle')) :
                setQuiz(res.data);
        }).catch(error => {
            setIsFetch(true);
            const errorMessage = { ...error.response }.data.message;
            dispatch(setToastParameters(true, errorMessage, 'exclamation-circle'));
        })
    }

    useEffect(() => {
        doesExistQuiz(getId());
    }, [])

    useEffect(() => {
        console.log('Quiz: ', quiz);
    }, [quiz])

    return (
        <PageTemplate>
            {isFetch ?
                quiz ?
                <MultiStepForm
                    onSubmit={() => console.log("Submit")}
                    handleLeftButton={() => setStep(prev => prev - 1)}
                    handleRightButton={() => setStep(prev => prev + 1)}
                    counter={step}>
                    <div>elo</div>
                    <div>dsdsa</div>
                    <div>dsadsa</div>
                    <div>fdsfdsgdew</div>
                </MultiStepForm> :
                <ErrorPage /> :
                <PreloaderScreen />
            }
        </PageTemplate>
    );
};

export default QuizPage;