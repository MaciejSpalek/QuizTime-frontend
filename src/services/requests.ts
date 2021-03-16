import { IQuizTemplate } from "Interfaces/quizInterfaces";
import { axiosInstance } from "./api";

// Quiz
export const fetchAllQuizzes = async () => {
  return await axiosInstance.get("/quiz/allQuizzes");
};

export const fetchSingleQuiz = async (id: string, author: string) => {
  return await axiosInstance.get("/quiz/singleQuiz", {
    params: { id, author },
  });
};

export const fetchCategoryQuizzes = async (category: string) => {
  return await axiosInstance.get("/quiz/allCategoryQuizzes", {
    params: { category },
  });
};


export const addQuiz = async (data: IQuizTemplate, token: string) =>
  await axiosInstance.post("/quiz/addQuiz", data, {
    headers: { "auth-token": token },
  });

export const addScore = async (
  score: string,
  quizID: string,
  executor: string,
  token: string
) =>
  await axiosInstance.post(
    "/quiz/addScore",
    { score, quizID, executor },
    {
      headers: { "auth-token": token },
    }
  );

export const updateQuizCounter = async (id: string) =>
  await axiosInstance.put("/quiz/updateCounter", { id });

export const fetchTheMostPopularQuiz = async () => {
  return await axiosInstance.get("/quiz/mostPopular");
};

// User
export const fetchSingleUser = async (route: string) => {
  return await axiosInstance.get("/user/singleUser", {
    params: { name: route },
  });
};

export const fetchUsersNames = async () => {
  return await axiosInstance.get("/user/allNames");
};

export const fetchUserScores = (executor: string, token: string) => {
  return axiosInstance.get("/user/allScores", {
    params: { executor },
    headers: { "auth-token": token },
  });
};

export const fetchUserScore = (executor: string, quizID: string, token: string) => {
  return axiosInstance.get("/user/singleScore", {
    params: { executor, quizID },
    headers: { "auth-token": token },
  });
};

export const fetchUserQuizzes = async (route: string) => {
  return await axiosInstance.get("/user/allQuizzes", {
    params: { author: route },
  });
};
