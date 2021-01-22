import { IQuestion } from "Interfaces/quizInterfaces";

export interface IScoreWindow {
  closeTheQuiz: () => void;
  questions?: IQuestion[];
  score: string;
};
