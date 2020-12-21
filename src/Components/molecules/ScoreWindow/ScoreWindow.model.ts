import { IQuestion } from "Interfaces/quizInterfaces";
import { IFormColor } from "Interfaces/quizInterfaces";

export interface IScoreWindow {
  closeTheQuiz: () => void;
  questions?: IQuestion[];
  score: string;
  colors: IFormColor;
};
