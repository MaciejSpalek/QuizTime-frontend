import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import QuizThumbnail from '../QuizThumbnail';
import Placeholder from 'templates/PlaceholderTemplate';
import { StyledList, StyledListItem, StyledContainer } from './QuizzesList.styled';
import { IQuizzesList, IScore } from './QuizzesList.model';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { axiosInstance } from 'services/api';
import { StyledPlaceholderText } from '../SubmitStep/SubmitStep.styled';
import { doesScrollExist } from 'helpers/getters';

const QuizzesList = ({ quizzes }: IQuizzesList) => {
    const history = useHistory();
    const listRef = useRef<HTMLUListElement>(null); 
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [scores, setScores] = useState<string[]>([])

    const handleOnClick = (id: string, author: string) => history.push(`${author}/${id}`);

    const fetchUserScores = (executor: string) => {
        return axiosInstance.get('quizes/userScores', {
            params: { executor }
        });
    };

    const manageScores = useCallback((quizzes: IQuizTemplate[]) => {
        if (loggedUser) {
            fetchUserScores(loggedUser).then(res => {
                const scoresArray: IScore[] = res.data;
                const mappedQuizzes = quizzes.map(({ _id, amountOfQuestions }) => {
                    const foundScore = scoresArray.find(({ quizID, executor }) => quizID === _id && executor === loggedUser);
                    if (foundScore) {
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
    }, [loggedUser]);

    useEffect(() => {
        quizzes && manageScores(quizzes);
    }, [quizzes, loggedUser, manageScores]);

  

    return (
        <StyledContainer>
            {quizzes.length ?
                <StyledList ref={listRef} isScroll={doesScrollExist(listRef)}>
                    {quizzes.map((data, index) =>
                        <StyledListItem
                            key={data._id}
                            id={data._id}
                            onClick={() => handleOnClick(`${data._id}`, `${data.author}`)}>
                            <QuizThumbnail 
                                score={scores[index]} 
                                parameters={data} 
                                isHover={true}
                            />
                        </StyledListItem>)}
                </StyledList> :
                <Placeholder>
                    <StyledPlaceholderText> 
                        No quizzes 
                    </StyledPlaceholderText>
                </Placeholder>
            }
        </StyledContainer>
    );
};

export default QuizzesList;
