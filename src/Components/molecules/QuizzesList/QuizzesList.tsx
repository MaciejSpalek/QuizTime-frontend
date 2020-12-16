import React, { useEffect, useState } from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { StyledList, StyledListItem, StyledContainer } from './QuizzesList.styled';
import { IQuizzesList, IScore } from './QuizzesList.model';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { axiosInstance } from 'services/api';

const QuizzesList = ({ quizzes }: IQuizzesList) => {
    const history = useHistory();
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [scores, setScores] = useState<any>([])

    const handleOnClick = (id: string, author: string) => history.push(`${author}/${id}`);

    const fetchUserScores = (executor: string) => {
        return axiosInstance.get('quizes/userScores', {
            params: { executor }
        });
    };

    const manageScores = (quizzes: IQuizTemplate[]) => {
        if (loggedUser) {
            fetchUserScores(loggedUser).then(res => {
                const scoresArray: IScore[] = res.data;
                const mappedQuizzes = quizzes.map(({ _id, amountOfQuestions }) => {
                    const foundScore = scoresArray.find(({ quizID, executor }) => quizID === _id && executor === loggedUser );
                    // console.log(foundScore)
                    if(foundScore) {
                        return foundScore.score;
                    } else {
                        return `?/${amountOfQuestions}`
                    }
                });
                setScores(mappedQuizzes);
            })
        } else {
            setScores(quizzes.map(({ amountOfQuestions }) => `?/${amountOfQuestions}`));
        }
    }
    
    useEffect(() => {
        quizzes && manageScores(quizzes);
    }, [quizzes, loggedUser]);

    useEffect(() => {
        // console.log(scores)
    }, [scores]);

    
    return (
        <StyledContainer>
            <StyledList>
                {quizzes.map((data, index) =>
                    <StyledListItem
                        key={data._id}
                        id={data._id}
                        onClick={() => handleOnClick(`${data._id}`, `${data.author}`)}>
                        <QuizThumbnail score={scores[index]} parameters={data} />
                    </StyledListItem>)}
            </StyledList>
        </StyledContainer>
    );
};

export default QuizzesList;
