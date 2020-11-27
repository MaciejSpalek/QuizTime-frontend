import React from 'react';
import { StyledLoader } from './index.styled'

const Spinner = () => {
    return (
        <StyledLoader 
            animation="border" 
            role="status" 
        />
    )
}

export default Spinner;
