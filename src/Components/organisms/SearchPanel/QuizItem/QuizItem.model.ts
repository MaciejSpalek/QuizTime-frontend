import { IFormColor } from "Interfaces/quizInterfaces";

export interface IQuizItem {
    id: string;
    text: string;
    icon: string;
    author: string;
    colors: IFormColor;
};