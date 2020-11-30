import React, { useCallback, useEffect, useState } from 'react';
import { StyledContainter, StyledQuizThumbnail } from './ThumbnailStep.styled';
import { OptionType } from '../SelectInput/SelectInput.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { IFormColor } from 'Interfaces/quizInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { setFormColor, setFormIconName } from 'redux/Actions/quizActions';
import { RootState } from 'redux/store';
import { IThumbnailStep } from './ThumbnailStep.model';
import Label from 'Components/atoms/Label';
import ColorSelect from '../SelectInput';
import Input from 'Components/atoms/Input/Input';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';
import CategorySelect from '../SelectInput';
import ErrorMessage from 'Components/atoms/ErrorMessage';

const ThumbnailStep = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange
}: IThumbnailStep): JSX.Element => {
  const [title, setTitle] = useState('Example title');
  const dispatch = useDispatch();
  const formColors = useSelector<RootState, IFormColor>(state => state.quizes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizes.formIconName);
  const author = useSelector<RootState>(state => state.user.loggedUser);


  const handleColor = (colorValue: IFormColor | undefined, type: string) => {
    if (type === OptionType.COLOR && colorValue) {
      dispatch(setFormColor(colorValue));
    }
  };

  const handleTitle = useCallback(() => {
    values.title ?
      setTitle(values.title) :
      setTitle('Example title')
  }, [values, setTitle]);

  const handleIconName = (iconName: string, type: string) => {
    if (type === OptionType.ICON && typeof iconName !== 'undefined') {
      dispatch(setFormIconName(iconName));
    }
  };

  useEffect(() => {
    handleTitle();
  }, [values.title, handleTitle]);


  return (
    <StyledContainter>
      <StyledQuizThumbnail
        parameters={{
          title,
          author: `${author}`,
          iconName: `${formIconName}`,
          colors: formColors,
          amountOfQuestions: 5
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
          name="title"
          maxLength={20}
          ariaInvalid={true}
          ariaDescribedBy="title_error"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.title && touched.title ? (
          <ErrorMessage id="title_error" text={errors.title} />
        ) : null}
      </FormField>
      <ColorSelect
        type={OptionType.COLOR}
        options={[
          { id: "1", title: "Basic", value: { primary: '#00D952', secondary: '#00a03d' } },
          { id: "2", title: "Sea", value: { primary: '#80D4CD', secondary: '#2982A2' } },
          { id: "3", title: "Blue", value: { primary: '#99B3E1', secondary: '#4F62A3' } },
          { id: "4", title: "Blue", value: { primary: '#A0ADBD', secondary: '#372E46' } },
          { id: "5", title: "Blue", value: { primary: '#ACA398', secondary: '#443C51' } },
          { id: "6", title: "Blue", value: { primary: '#ECCE8D', secondary: '#2C1931' } },
          { id: "7", title: "Dessert", value: { primary: '#F7BC14', secondary: '#201F26' } },
        ]}
        selectCaption="Select theme"
        handleOnClick={callback => handleColor(callback.value, OptionType.COLOR)}
        selectedColor={formColors}
      />
      <CategorySelect
        type={OptionType.ICON}
        options={[
          { id: "1", title: "Person", icon: 'male' },
          { id: "2", title: "Games", icon: 'gamepad' },
          { id: "3", title: "Movies", icon: 'film' },
          { id: "4", title: "Science", icon: 'flask' },
          { id: "5", title: "Animals", icon: 'paw' },
          { id: "6", title: "History", icon: 'landmark' },
          { id: "7", title: "Music", icon: 'music' },
          { id: "8", title: "Geography", icon: 'globe-americas' },
          { id: "9", title: "YouTube", icon: ['fab', 'youtube'] },
          { id: "10", title: "Sport", icon: ['fas', 'volleyball-ball'] },
        ]}
        selectCaption="Select category"
        selectedIconName={`${formIconName}`}
        handleOnClick={callback => handleIconName(callback.icon as IconName, OptionType.ICON)}
      />
    </StyledContainter>
  )
}

export default ThumbnailStep

