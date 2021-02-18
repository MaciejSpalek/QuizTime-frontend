import React from 'react'
import Spinner from 'Components/atoms/Spinner';
import Template from 'templates/UniversalTemplate'; 

const PreloaderScreen = ({ ...props }) => {
  return (
    <Template isPlaceholder data-testid="PreloaderScreen" {...props}>
        <Spinner />
    </Template>
  );
};

export default PreloaderScreen;