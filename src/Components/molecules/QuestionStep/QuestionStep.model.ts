import { IFormAnswer } from "Interfaces/quizInterfaces";
import { ChangeEvent } from "react";
import { IFormColor } from "Interfaces/quizInterfaces";
export interface IQuestionStep {
    index: number;
    content: string;
    readonly: boolean;
    colors: IFormColor;
    answers: IFormAnswer [];
    array?: (string | null)[]; 
    values?: {answers: string[]};
    handleBlur?: (e:ChangeEvent<HTMLElement>) => void;
    handleChange?: (e:ChangeEvent<HTMLElement>) => void;
};