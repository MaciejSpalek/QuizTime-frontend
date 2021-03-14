import React, { useCallback, useEffect, useState } from "react";
import {
  StyledThumbnailWrapper,
  StyledQuizThumbnail,
  StyledBottomWrapper,
  StyledIconWrapper,
  StyledTopWrapper,
  StyledContainer,
  StyledCounter,
  StyledHeading,
  StyledIcon,
} from "./PopularQuizBanner.styled";
import { IPopularQuiz } from "./PopularQuizBanner.model";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { showCookie } from "helpers/cookies";
import { RootState } from "redux/store";
import { IQuizTemplate } from "Interfaces/quizInterfaces";
import { fetchUserScore } from "services/requests";
import { IScore } from "Components/organisms/QuizzesList/QuizzesList.model";

const PopularQuizBanner = ({ quiz }: IPopularQuiz): JSX.Element => {
  const history = useHistory();
  const loggedUser = useSelector<RootState, string | null>(
    (state) => state.session.loggedUser
  );
  const [score, setScore] = useState<string | null>(null);
  const [token] = useState(showCookie("token"));

  const handleOnClick = (id: string, author: string) =>
    history.push(`${author}/${id}`);

  const onKeyPress = (id: string, author: string, e?: any) => {
    if (e.which === 13) {
      history.push(`${author}/${id}`);
    }
  };
  const manageScore = useCallback(
    (quiz: IQuizTemplate) => {
      if (loggedUser) {
        fetchUserScore(loggedUser, `${quiz?._id}`, token).then((res) => {
          const tempScore: IScore = res.data[0];
          if (tempScore) {
            setScore(tempScore.score);
          } else {
            setScore(`?/${quiz?.amountOfQuestions}`);
          }
        });
      } else {
        setScore(`?/${quiz.amountOfQuestions}`);
      }
    },
    [loggedUser, token]
  );

  useEffect(() => {
    quiz && manageScore(quiz);
  }, [quiz, loggedUser, manageScore]);

  return (
    <StyledContainer>
      <StyledTopWrapper>
        <StyledHeading> The most popular </StyledHeading>
        <StyledIconWrapper>
          <StyledIcon icon={"eye"} />
          <StyledCounter> {quiz?.counter} </StyledCounter>
        </StyledIconWrapper>
      </StyledTopWrapper>
      <StyledBottomWrapper>
        <StyledThumbnailWrapper
          onKeyPress={(e) => onKeyPress(`${quiz?._id}`, `${quiz?.author}`, e)}
          onClick={() => handleOnClick(`${quiz?._id}`, `${quiz?.author}`)}
        >
          {quiz && (
            <StyledQuizThumbnail
              score={`${score}`}
              parameters={quiz}
              isHover={true}
            />
          )}
        </StyledThumbnailWrapper>
      </StyledBottomWrapper>
    </StyledContainer>
  );
};

export default PopularQuizBanner;
