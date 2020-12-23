import { IQuizTemplate } from "Interfaces/quizInterfaces";

export interface IUsers {
    _id: string;
    name: string;
};

export interface ISearchPanel {
    quizzes: IQuizTemplate[];
    users: IUsers[];
};