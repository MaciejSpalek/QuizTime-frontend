import { IFormAnswer } from "Interfaces/quizInterfaces";

export interface IQuestionBox {
    id: number;
    index: number;
    question: string;
    answers: IFormAnswer[];
}