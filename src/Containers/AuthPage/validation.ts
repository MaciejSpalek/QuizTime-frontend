import * as yup from "yup";

export const authPageValidation = yup.object({
    email: yup.string()
    .required('Required')
    .email('Invalid e-mail'),
    name: yup.string()
        .required('Required')
        .min(3, 'Min. 3 characters')
        .max(10, 'Max. 10 characters'),
    password: yup.string()
        .min(6, 'Min 6 characters')
        .max(100, 'Max 24 characters')
        .required('Required')
});
