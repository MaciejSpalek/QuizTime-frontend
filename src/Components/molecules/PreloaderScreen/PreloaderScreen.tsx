import React from 'react'
import Spinner from 'Components/atoms/Spinner';
import Placeholder from 'templates/PlaceholderTemplate'; 

const PreloaderScreen = () => {
  return (
    <Placeholder>
        <Spinner />
    </Placeholder>
  );
};

export default PreloaderScreen;