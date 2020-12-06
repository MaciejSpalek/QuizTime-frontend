import { IFormAnswer } from "Interfaces/quizInterfaces";

export interface IQuestionStep {
    content: string;
    answers: IFormAnswer [];
}