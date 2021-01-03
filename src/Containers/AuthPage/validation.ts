import { strict } from "assert";
import * as yup from "yup";

export const authPageValidation = yup.object({
    name: yup.string()
        .required('Required')
        .min(3, 'Name must be at least 3 characters')
        .max(15, 'Name can be maximum 15 characters'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(100, 'Password can be maximum 24 characters')
        .required('Required')
});
