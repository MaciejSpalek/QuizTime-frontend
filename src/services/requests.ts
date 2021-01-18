import { IQuizTemplate } from "Interfaces/quizInterfaces";
import { axiosInstance } from "./api";

export const fetchAllQuizzes = async () => {
  return await axiosInstance.get("/quizes/allQuizzes");
};

export const fetchUsersNames = async () => {
  return await axiosInstance.get("/user/allNames");
};

export const addQuiz = async (data: IQuizTemplate, token: string) =>
  await axiosInstance.post("/quizes/addQuiz", data, {
    headers: { "auth-token": token },
  });

export const fetchSingleUser = async (route: string) => {
  return await axiosInstance.get("/user/singleUser", {
    params: { name: route },
  });
};

export const fetchUserScores = (executor: string) => {
  return axiosInstance.get("quizes/userScores", {
    params: { executor },
  });
};

export const fetchUserQuizzes = async (route: string) => {
  return await axiosInstance.get("/quizes/userQuizzes", {
    params: { author: route },
  });
};

export const addScore = async (
  score: string,
  quizID: string,
  executor: string
) => await axiosInstance.post("/quizes/addScore", { score, quizID, executor });

export const updateQuizCounter = async (id: string) =>
  await axiosInstance.put("/quizes/updateCounter", { id });

export const fetchSingleQuiz = async (id: string, author: string) => {
  return await axiosInstance.get("/quizes/singleQuiz", {
    params: { id, author },
  });
};
