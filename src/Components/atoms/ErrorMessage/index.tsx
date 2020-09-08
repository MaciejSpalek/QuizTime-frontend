import React from 'react'
import { StyledErrorMessage } from './index.styled'

type Props = { 
    id: string
    text: string 
}


const ErrorMessage = ({ text, id }: Props)=> {
    return (
        <StyledErrorMessage id={id}>
            {text} 
        </StyledErrorMessage>
    )
}

export default ErrorMessage