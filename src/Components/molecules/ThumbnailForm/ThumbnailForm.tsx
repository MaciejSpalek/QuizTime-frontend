import React, { useEffect, useState } from 'react'
import { StyledContainter, StyledQuizThumbnail } from './ThumbnailForm.styled'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate'
import CategorySelect from '../SelectInput'
import ColorSelect from '../SelectInput'
import { OptionType } from '../SelectInput/SelectInput.model'
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Color } from 'Interfaces/quizInterfaces'
import { useDispatch, useSelector } from 'react-redux'
import { setFormColor, setFormIconName, setFormTitle } from 'redux/Actions/quizActions'
import { RootState } from 'redux/store'

const ThumbnailForm = () => {
  // const [color, setColor] = useState<Color>({primary: '#00D952', secondary: '#00a03d'});
  const [title, setTitle] = useState('Example title');
  const [author, setAuthor] = useState('Author');
  const [score, setScore] = useState('0/12');
  
  const dispatch = useDispatch();
  const formTitle = useSelector<RootState>(state => state.quizes.formTitle)
  const formColor = useSelector<RootState, Color>(state => state.quizes.formColor)
  const formIconName = useSelector<RootState>(state => state.quizes.formIconName)

  const handleColor = (colorValue: Color | undefined, type: string) => {
    if(type === OptionType.COLOR && colorValue) {
        dispatch(setFormColor(colorValue))
    }
  }

  const handleTitle = () => {
    formTitle ? setTitle(`${formTitle}`) : setTitle('Example title')
  }

  const handleIconName = (iconName: string, type: string) => {
    if(type === OptionType.ICON && typeof iconName !== 'undefined') {
      dispatch(setFormIconName(iconName))
    }
  }
  
  
  useEffect(() => {
    handleTitle()
  }, [formTitle])

  useEffect(() => {
    console.log("SelectedColor ThumbnailForm: ", formColor)
  }, [formColor])

  return (
    <StyledContainter>
      <StyledQuizThumbnail 
        parameters={{
          name: title,
          author,
          iconName: formIconName,
          score,
          color: formColor
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
          defaultValue={`${formTitle}`}
          onChange={(e: any) =>  dispatch(setFormTitle(e.target.value))}
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
        ]}
        selectCaption="Select theme"
        handleOnClick={callback => handleColor(callback.value, OptionType.COLOR)}
        selectedColor={formColor}
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
        selectedIconName={`${formIconName}`}
        handleOnClick={callback => handleIconName(callback.icon as IconName, OptionType.ICON)}
      />
    </StyledContainter>  
  )
}  

export default ThumbnailForm

