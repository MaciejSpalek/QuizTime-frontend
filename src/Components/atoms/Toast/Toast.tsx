import React, { useEffect, useState } from 'react';
import { IParameters, IToast } from './Toast.model';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import {
  StyledToast,
  StyledText,
  StyledIcon
} from './Toast.styled';

const Toast = ({ isActive, type, deactivate, ...props }: IToast): JSX.Element => {
  const [icon, setIcon] = useState('');
  const [color, setColor] = useState('');
  const [text, setText] = useState('');

  const getParameters = (): IParameters => {
    switch (type) {
      case 'success': {
        return {
          text: 'Success!',
          color: 'green',
          icon: 'check-circle'
        }
      }

      case 'error': {
        return {
          text: 'Error!',
          color: 'red',
          icon: 'exclamation-circle'
        }
      }

      default: {
        return {
          text: 'Info!',
          color: 'blue',
          icon: 'exclamation-circle'
        }
      }
    }
  }

  useEffect(() => {
    const { icon, color, text } = getParameters();
    setIcon(icon);
    setColor(color);
    setText(text)
  }, [type]);

  useEffect(() => {
    if(isActive) {
      setTimeout(() => {
        deactivate()
      }, 3000)
    }
  }, [isActive]);

  return (
    <>
      {isActive ?
        <StyledToast color={color} {...props}>
          <StyledIcon icon={icon as IconName} />
          <StyledText>
            {text}
          </StyledText>
        </StyledToast> : null}
    </>
  )
};

export default Toast;
