import { ChangeEvent } from "react";

export interface IRadioButton {
    id?: string;
    name: string;
    label?: string;
    value: string;
    checked: boolean;
    onChange?: (e: ChangeEvent<HTMLElement>) => void;
    onBlur?: (e: ChangeEvent<HTMLElement>) => void;
}