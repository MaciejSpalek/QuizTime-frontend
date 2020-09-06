import React from 'react';
import { StyledLoader } from './index.styled'
const Spinner = () => {
    return (
        <StyledLoader 
            animation="border" 
            role="status" 
            // style={{
            //     color: "#FF4643", 
            //     width: "5rem", 
            //     height: "5rem"
            // }} 
        />
        // <>x</>
    )
}

export default Spinner;
