import React from 'react';
import { StyledLoader } from './Spinner.styled'

const Spinner = ({ ...props }) => {
    return (
        <StyledLoader 
            animation="border" 
            role="status" 
            data-testid="Spinner"
            {...props}
        />
    );
};

export default Spinner;
