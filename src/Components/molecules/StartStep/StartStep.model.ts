import { IFormColor } from "Interfaces/quizInterfaces";

export interface IStartStep {
    onClick: ()=> void;
    title: string;
    icon: string;
    colors: IFormColor;
}