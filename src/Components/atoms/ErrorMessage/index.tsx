import React, { FC } from 'react'
import { StyledErrorMessage } from './index.styled'

type Props = { 
    text: string 
    id: string
}


const ErrorMessage: FC<Props> = ({ text, id })=> {
    return (
        <StyledErrorMessage id={id}>
            {text} 
        </StyledErrorMessage>
    )
}

export default ErrorMessage