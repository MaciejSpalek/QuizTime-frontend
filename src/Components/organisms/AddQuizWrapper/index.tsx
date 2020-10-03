import React, { useState } from 'react'
import { StyledContainter } from './index.styled'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import FormField from '../../../templates/FormFieldTemplate/FormFieldTemplate'
import QuizThumbnail from '../../molecules/QuizTestimonial'
import CategorySelect from '../../molecules/SelectInput'
import ColorSelect from '../../molecules/SelectInput'
import { OptionType } from '../../molecules/SelectInput/SelectInput.model'
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Color } from 'Interfaces/quizInterfaces'
import ArrowButton from 'Components/atoms/ArrowButton'
import QuizPagination from 'Components/molecules/QuizPagination'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { setQuizFormPageCounter } from 'redux/Actions/quizActions'


const AddQuizWrapper = () => {
  const [color, setColor] = useState<Color>({primary: '#00D952', secondary: '#00a03d'});
  const [name, setName] = useState('Example title');
  const [author, setAuthor] = useState('Author');
  const [iconName, setIconName] = useState('male');
  const [score, setScore] = useState('0/12');

  const dispatch = useDispatch()
  const quizFormPageCounter = useSelector<RootState, number>(state => state.quizes.quizFormPageCounter)

  const handleColor = (colorValue: Color | undefined, type: string) => {
    if(type === OptionType.COLOR && colorValue) {
        setColor(colorValue)
    }
  }

  const handleTitle = (title: string) => {
    title ? setName(title) : setName('Example title')
  }

  const handleIconName = (icon: string, type: string) => {
    if(type === OptionType.ICON && typeof icon !== 'undefined') {
      setIconName(icon)
    }
  }


  return (
    <StyledContainter>
      <QuizThumbnail 
        parameters={{
          name,
          author,
          iconName,
          score,
          color
        }}
      />
      <FormField>
        <Label 
          text="Title"
          forText="title"
        />
        <Input 
          id="title"
          type="text"
          maxLength={20}
          onChange={(e: any) => handleTitle(e.target.value)}
        />
      </FormField>
      <ColorSelect 
        type={OptionType.COLOR}
        options={[
          {id: "1", title: "Basic", value: {primary:"#00D952", secondary:"#00a03d"}},
          {id: "2", title: "Sea", value: {primary: '#80D4CD', secondary: '#2982A2'}},
          {id: "3", title: "Blue", value: {primary: '#99B3E1', secondary: '#4F62A3'}},
          {id: "4", title: "Blue", value: {primary: '#A0ADBD', secondary: '#372E46'}},
          {id: "5", title: "Blue", value: {primary: '#ACA398', secondary: '#443C51'}},
          {id: "6", title: "Blue", value: {primary: '#ECCE8D', secondary: '#2C1931'}},
          {id: "7", title: "Dessert", value: {primary: '#F7BC14', secondary: '#201F26'}},
          
        ]}
        selectCaption="Select theme"
        handleOnClick={callback => handleColor(callback.value, OptionType.COLOR)}
      />
      <CategorySelect 
        type={OptionType.ICON}
        options={[
          {id: "1", title: "Person", icon: 'male'},
          {id: "2", title: "Games", icon: 'gamepad'},
          {id: "3", title: "Movies", icon: 'film'},
          {id: "4", title: "Science", icon: 'flask'},
          {id: "5", title: "Animals", icon: 'paw'},
          {id: "6", title: "History", icon: 'landmark'},
          {id: "7", title: "Music", icon: 'music'},
          {id: "8", title: "Geography", icon: 'globe-americas'},
          {id: "9", title: "YouTube", icon: ['fab', 'youtube']},
          {id: "10", title: "Sport", icon: ['fas', 'volleyball-ball']},
        ]}
        selectCaption="Select category"
        handleOnClick={callback => handleIconName(callback.icon as IconName, OptionType.ICON)}
      />
      <QuizPagination 
        maxFrames={2} 
        counter={quizFormPageCounter}
        handleLeftButton={() => dispatch(setQuizFormPageCounter(quizFormPageCounter-1))}
        handleRightButton={() => dispatch(setQuizFormPageCounter(quizFormPageCounter+1))}
      />
    </StyledContainter>  
  )
}  

export default AddQuizWrapper

