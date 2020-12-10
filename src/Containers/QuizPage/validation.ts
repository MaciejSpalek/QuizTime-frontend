import * as yup from "yup";

export const quizPageValidation = yup.object({
  answers: yup.array().of(yup.string().notRequired()),
});
