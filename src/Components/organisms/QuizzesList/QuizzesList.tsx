import React, { useCallback, useEffect, useRef, useState } from "react";
import QuizThumbnail from "../../molecules/QuizThumbnail";
import Paragraph from "Components/atoms/Paragraph";
import { setAddQuizButtonStatus } from "redux/Actions/statusActions";
import { IQuizzesList, IScore } from "./QuizzesList.model";
import { IQuizTemplate } from "Interfaces/quizInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserScores } from "services/requests";
import { useHistory } from "react-router-dom";
import { showCookie } from "helpers/cookies";
import { RootState } from "redux/store";
import {
  StyledPlaceholder,
  StyledContainer,
  StyledListItem,
  StyledHeading,
  StyledButton,
  StyledStrong,
  StyledPhoto,
  StyledList,
} from "./QuizzesList.styled";

const QuizzesList = ({ title, quizzes, matchUsername }: IQuizzesList) => {
  const listRef = useRef<HTMLUListElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const loggedUser = useSelector<RootState, string | null>(
    (state) => state.session.loggedUser
  );
  const [scores, setScores] = useState<string[]>([]);
  const [token] = useState(showCookie("token"));

  const handleOnClick = (id: string, author: string) => {
    history.replace({pathname: `/${author}/${id}`})
  };

  const onKeyPress = (id: string, author: string, e?: any) => {
    if (e.which === 13) {
      history.replace({pathname: `/${author}/${id}`})
    }
  };

  const handleButton = () => dispatch(setAddQuizButtonStatus(true));
  const isUserRoute = () => matchUsername === loggedUser;

  const manageScores = useCallback(
    (quizzes: IQuizTemplate[]) => {
      if (loggedUser) {
        fetchUserScores(loggedUser, token).then((res) => {
          const scoresArray: IScore[] = res.data;
          const mappedQuizzes = quizzes.map(({ _id, amountOfQuestions }) => {
            const foundScore = scoresArray.find(
              ({ quizID, executor }) =>
                quizID === _id && executor === loggedUser
            );
            if (foundScore) {
              return foundScore.score;
            } else {
              return `?/${amountOfQuestions}`;
            }
          });
          setScores(mappedQuizzes);
        });
      } else {
        setScores(
          quizzes.map(({ amountOfQuestions }) => `?/${amountOfQuestions}`)
        );
      }
    },
    [loggedUser, token]
  );

  useEffect(() => {
    quizzes && manageScores(quizzes);
  }, [quizzes, loggedUser, manageScores]);

  return (
    <StyledContainer>
      <StyledHeading>
        {title} (<StyledStrong>{quizzes.length}</StyledStrong>)
      </StyledHeading>
      {quizzes.length ? (
        <StyledList ref={listRef}>
          {quizzes.map((data, index) => (
            <StyledListItem
              key={data._id}
              id={data._id}
              onKeyPress={(e) => onKeyPress(`${data._id}`, `${data.author}`, e)}
              onClick={() => handleOnClick(`${data._id}`, `${data.author}`)}
            >
                <QuizThumbnail
                  score={scores[index]}
                  parameters={data}
                  isHover={true}
                />
            </StyledListItem>
          ))}
        </StyledList>
      ) : (
        <StyledPlaceholder isPlaceholder>
          <StyledPhoto />
          {isUserRoute() && (
            <>
              <Paragraph text="Add your first quiz!" />
              <StyledButton handleOnClick={handleButton}>Add</StyledButton>
            </>
          )}
        </StyledPlaceholder>
      )}
    </StyledContainer>
  );
};

export default QuizzesList;
