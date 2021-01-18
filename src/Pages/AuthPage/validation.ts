import * as yup from "yup";

export const authPageValidation = (isLoginRoute: boolean) =>
  yup.object({
    email: isLoginRoute
      ? yup.string().email("Invalid e-mail")
      : yup.string().email("Invalid e-mail").required("Required"),
    name: yup
      .string()
      .required("Required")
      .min(3, "Min. 3 characters")
      .max(10, "Max. 10 characters"),
    password: yup
      .string()
      .min(6, "Min 6 characters")
      .max(100, "Max 24 characters")
      .required("Required"),
  });
