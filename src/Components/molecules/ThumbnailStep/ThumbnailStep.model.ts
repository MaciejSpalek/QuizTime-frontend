import { IErrors, IFormikValues } from "Containers/ProfilePage/ProfilePage.model";
import { FormikErrors, FormikValues } from "formik";
import { ChangeEvent } from "react";

export interface IThumbnail {
    handleChange: (e: ChangeEvent<HTMLElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLElement>) => void;
    touched: FormikValues;
    errors: FormikErrors<IErrors>;
    values: IFormikValues;
}