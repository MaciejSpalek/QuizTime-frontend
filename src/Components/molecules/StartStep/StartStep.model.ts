import { IFormColor } from "Interfaces/quizInterfaces";

export interface IStartStep {
    onClick: ()=> void;
    colors: IFormColor;
    author: string;
    title: string;
    icon: string;
};