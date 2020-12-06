import { IFormAnswer } from "Interfaces/quizInterfaces";

export interface IQuestionStep {
    index: number;
    content: string;
    answers: IFormAnswer [];
}