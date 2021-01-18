import React, { useCallback, useEffect, useState } from 'react';
import ErrorMessage from 'Components/atoms/ErrorMessage';
import Input from 'Components/atoms/Input/Input';
import Label from 'Components/atoms/Label';
import { setFormColor, setFormIconName } from 'redux/Actions/quizActions';
import { OptionType } from '../../../molecules/SelectInput/SelectInput.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { QuizIcons, QuizThemes } from 'helpers/constants';
import { IFormColor } from 'Interfaces/quizInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { IThumbnailStep } from './ThumbnailStep.model';
import { RootState } from 'redux/store';
import {
  StyledContainter,
  StyledQuizThumbnail,
  StyledInputWrapper,
  StyledCategorySelect,
  StyledColorSelect,
  StyledFormField
} from './ThumbnailStep.styled';
import { capitalizeFirstLetter } from 'helpers/string';


const ThumbnailStep = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange
}: IThumbnailStep): JSX.Element => {
  const [title, setTitle] = useState('Example title');
  const dispatch = useDispatch();
  const formColors = useSelector<RootState, IFormColor>(state => state.quizzes.formColor);
  const formIconName = useSelector<RootState>(state => state.quizzes.formIconName);
  const author = useSelector<RootState>(state => state.session.loggedUser);


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
        score={`1/5`}
        isHover={false}
      />
      <StyledInputWrapper>
        <StyledFormField>
          <Label
            text="Title"
            forText="title"
          />
          <Input
            id="title"
            type="text"
            name="title"
            ariaInvalid={true}
            ariaDescribedBy="title_error"
            value={capitalizeFirstLetter(values.title)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {(errors.title && touched.title) &&
            <ErrorMessage id="title_error" text={errors.title} />}
        </StyledFormField>
        <StyledColorSelect
          type={OptionType.COLOR}
          options={QuizThemes}
          selectCaption="Select theme"
          handleOnClick={callback => handleColor(callback.value, OptionType.COLOR)}
          selectedColor={formColors}
        />
        <StyledCategorySelect
          type={OptionType.ICON}
          options={QuizIcons}
          selectCaption="Select category"
          selectedIconName={`${formIconName}`}
          handleOnClick={callback => handleIconName(callback.icon as IconName, OptionType.ICON)}
        />
      </StyledInputWrapper>
    </StyledContainter>
  )
}

export default ThumbnailStep

