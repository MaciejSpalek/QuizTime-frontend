import React from 'react'
import Spinner from 'Components/atoms/Spinner';
import Placeholder from 'templates/PlaceholderTemplate'; 

const PreloaderScreen = ({ ...props }) => {
  return (
    <Placeholder {...props}>
        <Spinner />
    </Placeholder>
  );
};

export default PreloaderScreen;