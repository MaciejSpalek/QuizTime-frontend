import { IQuestion } from "Interfaces/quizInterfaces";

export interface IScoreWindow {
    score: string;
    questions?: IQuestion[];
}