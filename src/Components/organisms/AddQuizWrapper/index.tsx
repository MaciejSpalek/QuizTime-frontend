import React, { useState } from 'react'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import FormField from '../../../templates/FormFieldTemplate/FormFieldTemplate'
import { StyledContainter } from './index.styled'
import QuizThumbnail from '../../molecules/QuizTestimonial'
import { Quiz } from '../../../Interfaces/quizInterfaces'
import tempImage from '../../../assets/Person.svg'

const AddQuizWrapper = () => {
  const [ quizThumbnailParams, setQuizThumbnailParams ] = useState<Quiz>({
    name: "Title",
    author: "Author",
    isDone: false,
    image: tempImage,
    score: "4/12"
  })
  
  return (
    <StyledContainter>
      <QuizThumbnail 
        parameters={quizThumbnailParams}
      />
      <FormField>
        <Label 
          text="Title"
          forText="title"
        />
        <Input 
          id="title"
          type="text"
        />
      </FormField>
    </StyledContainter>  
  )
}  

export default AddQuizWrapper

