import { IErrors, IFormikValues } from "Containers/ProfilePage/ProfilePage.model";
import { FormikErrors, FormikState, FormikValues } from "formik";
import { ChangeEvent } from "react";

export interface IPanel {
    handleChange: (e: ChangeEvent<HTMLElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLElement>) => void;
    resetForm: (nextInitialState?: any) => void
    touched: FormikValues;
    errors: FormikErrors<IErrors>;
    values: IFormikValues;
}