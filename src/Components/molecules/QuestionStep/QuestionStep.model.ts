import { IFormAnswer } from "Interfaces/quizInterfaces";
import { ChangeEvent } from "react";

export interface IQuestionStep {
    index: number;
    content: string;
    readonly: boolean;
    answers: IFormAnswer [];
    array?: (string | null)[]; 
    values?: {answers: string[]};
    handleBlur?: (e:ChangeEvent<HTMLElement>) => void;
    handleChange?: (e:ChangeEvent<HTMLElement>) => void;
};