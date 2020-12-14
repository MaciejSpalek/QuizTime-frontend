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
import { QuizIcons, QuizThemes } from 'helpers/constants';

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
        options={QuizThemes}
        selectCaption="Select theme"
        handleOnClick={callback => handleColor(callback.value, OptionType.COLOR)}
        selectedColor={formColors}
      />
      <CategorySelect
        type={OptionType.ICON}
        options={QuizIcons}
        selectCaption="Select category"
        selectedIconName={`${formIconName}`}
        handleOnClick={callback => handleIconName(callback.icon as IconName, OptionType.ICON)}
      />
    </StyledContainter>
  )
}

export default ThumbnailStep

