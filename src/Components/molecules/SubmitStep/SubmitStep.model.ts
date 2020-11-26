import { IErrors, IFormikValues } from "Containers/ProfilePage/ProfilePage.model";
import { FormikErrors, FormikValues } from "formik";

export interface ISubmitStep {
    values: IFormikValues;
    errors: FormikErrors<IErrors>;
    touched: FormikValues;
    isSubmitting: boolean;

}