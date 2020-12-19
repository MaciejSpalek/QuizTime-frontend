import * as yup from 'yup';

export const profilePageValidation = (formCouter: number) => yup.object({
    title: yup.string()
      .required('Required')
      .min(2, 'min 2 characters')
      .max(30, 'max 30 characters'),
  
    question: formCouter === 2 ?
      yup.string()
        .required('Required')
        .min(5, 'min 5 characters')
        .max(120, 'max 120 characters') :
      yup.string()
        .min(5, 'min 5 characters')
        .max(120, 'max 120 characters'),
  
    answers: yup.array().of(
      yup.object().shape({
        content: formCouter === 2 ?
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