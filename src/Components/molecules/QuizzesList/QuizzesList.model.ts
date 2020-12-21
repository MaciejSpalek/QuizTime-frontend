import { IQuizTemplate } from "Interfaces/quizInterfaces";

export interface IQuizzesList {
    quizzes: IQuizTemplate[];
};

export interface IScore {
    date: Date;
    _id: string;
    score: string;
    quizID: string;
    executor: string;
};