import React, { useCallback, useEffect, useRef, useState } from 'react';
import QuizThumbnail from '../QuizThumbnail';
import { setAddQuizButtonStatus } from 'redux/Actions/statusesActions';
import { StyledText } from '../SubmitStep/SubmitStep.styled';
import { IQuizzesList, IScore } from './QuizzesList.model';
import { IQuizTemplate } from 'Interfaces/quizInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { doesScrollExist } from 'helpers/getters';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from 'services/api';
import { RootState } from 'redux/store';
import {
    StyledPlaceholder,
    StyledContainer,
    StyledListItem,
    StyledButton,
    StyledPhoto,
    StyledList
} from './QuizzesList.styled';

const QuizzesList = ({ quizzes, matchUsername }: IQuizzesList) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listRef = useRef<HTMLUListElement>(null);
    const [scores, setScores] = useState<string[]>([])
    const loggedUser = useSelector<RootState, string | null>(state => state.user.loggedUser);

    const handleOnClick = (id: string, author: string) => history.push(`${author}/${id}`);
    const handleButton = () => dispatch(setAddQuizButtonStatus(true));
    const isUserRoute = () => matchUsername === loggedUser;

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

    const getText = () => {
        if (isUserRoute()) {
            return "Add your first quiz!"
        } else {
            return "No quizzes"
        }
    };


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
                <StyledPlaceholder>
                    <StyledPhoto></StyledPhoto>
                    <StyledText> {getText()} </StyledText>
                    {isUserRoute() && <StyledButton
                        text='Just click!'
                        handleOnClick={handleButton}
                    />}
                </StyledPlaceholder>}
        </StyledContainer>
    );
};

export default QuizzesList;
