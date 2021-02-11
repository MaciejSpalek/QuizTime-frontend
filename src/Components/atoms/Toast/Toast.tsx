import React, { useEffect } from 'react';
import { setToastParameters } from 'redux/Actions/toastActions';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import {
  StyledToast,
  StyledText,
  StyledIcon
} from './Toast.styled';

const Toast = ({ ...props }): JSX.Element => {
  const { description, isActive, icon } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        dispatch(setToastParameters(false));
      }, 3000)
    }
  }, [isActive, dispatch]);

  if (!isActive) return <div data-testid="Toast"></div>
  
  return (
    <StyledToast data-testid='Toast' {...props}>
      <StyledIcon icon={icon as IconName} />
      <StyledText>
        {description}
      </StyledText>
    </StyledToast>
  )
};

export default Toast;
