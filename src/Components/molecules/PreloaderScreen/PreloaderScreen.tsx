import React from 'react'
import Spinner from 'Components/atoms/Spinner';
import { StyledContainer } from './PreloaderScreen.styled';

const PreloaderScreen = () => {
  return (
    <StyledContainer>
        <Spinner />
    </StyledContainer>
  );
};

export default PreloaderScreen;