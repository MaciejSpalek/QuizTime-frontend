import { IErrors } from "Containers/ProfilePage/ProfilePage.model";
import { FormikErrors } from "formik";

export interface ISubmitStep {
    errors: FormikErrors<IErrors>;
    isSubmitting: boolean;
}