import { ChangeEvent } from "react";

export interface IAnswer {
    questionIndex: number;
    values?: {answers: string[]};
    handleChange?: (e:ChangeEvent<HTMLElement>) => void;
    handleBlur?: (e:ChangeEvent<HTMLElement>) => void;
    readonly: boolean;
    outlineColor?: string | null;
}