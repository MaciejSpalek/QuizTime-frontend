import React from 'react';
import { StyledLoader } from './Spinner.styled'

const Spinner = () => {
    return (
        <StyledLoader 
            animation="border" 
            role="status" 
        />
    );
};

export default Spinner;
