import { TQuizPage } from "Containers/QuizPage/QuizPage.model";
import { IQuizTemplate } from "Interfaces/quizInterfaces";

export interface IQuizzesList {
    quizzes: IQuizTemplate[];
    matchUsername?: string;
};

export interface IScore {
    date: Date;
    _id: string;
    score: string;
    quizID: string;
    executor: string;
};