import { IFormAnswer } from "Interfaces/quizInterfaces";

export interface IQuestion {
    index: number;
    question: string;
    answers: IFormAnswer[];
}