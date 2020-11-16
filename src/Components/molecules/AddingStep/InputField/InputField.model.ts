import { FormikValues } from "formik";
import { ChangeEvent } from "react";

export interface IInputField {
    index: number;
    letter: string;
    content: string | number;
    radioValue: string;
    touched: FormikValues;
    error: any;
    handleChange: (e: ChangeEvent<HTMLElement> ) => void;
    handleBlur: (e: ChangeEvent<HTMLElement>) => void;
}