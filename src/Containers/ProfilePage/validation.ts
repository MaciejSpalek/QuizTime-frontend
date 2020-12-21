import * as yup from 'yup';

const isRequired = (formCounter: number, width: number) => (formCounter === 2 && width <= 850) || (formCounter === 1 && width >= 850); 

export const profilePageValidation = (formCounter: number, width: number) => yup.object({
    title: yup.string()
      .required('Required')
      .min(2, 'min 2 characters')
      .max(30, 'max 30 characters'),
  
    question: isRequired(formCounter, width) ?
      yup.string()
        .required('Required')
        .min(5, 'min 5 characters')
        .max(120, 'max 120 characters') :
      yup.string()
        .min(5, 'min 5 characters')
        .max(120, 'max 120 characters'),
  
    answers: yup.array().of(
      yup.object().shape({
        content: isRequired(formCounter, width) ?
          yup.string()
            .required('Required')
            .min(1, 'Minimum 1 character')
            .max(30, 'max 30 characters') :
          yup.string()
            .min(1, 'Minimum 1 character')
            .max(30, 'max 30 characters')
      })
    )
  });