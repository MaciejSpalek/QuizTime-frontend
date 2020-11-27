import React from 'react'
import { StyledErrorMessage } from './ErrorMessage.styled'
import { IErrorMessage } from './ErrorMessage.model'


const ErrorMessage = ({ text, id, ...props }: IErrorMessage)=> {
    return (
        <StyledErrorMessage id={id} {...props}>
            {text} 
        </StyledErrorMessage>
    )
}

export default ErrorMessage