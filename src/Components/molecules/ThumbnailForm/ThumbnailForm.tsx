import React, { useState } from 'react'
import { StyledContainter, StyledQuizThumbnail } from './ThumbnailForm.styled'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate'
import CategorySelect from '../SelectInput'
import ColorSelect from '../SelectInput'
import { OptionType } from '../SelectInput/SelectInput.model'
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { Color } from 'Interfaces/quizInterfaces'

const ThumbnailForm = () => {
  const [color, setColor] = useState<Color>({primary: '#00D952', secondary: '#00a03d'});
  const [name, setName] = useState('Example title');
  const [author, setAuthor] = useState('Author');
  const [iconName, setIconName] = useState('male');
  const [score, setScore] = useState('0/12');


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
      <StyledQuizThumbnail 
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
    </StyledContainter>  
  )
}  

export default ThumbnailForm

