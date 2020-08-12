import React, { FC } from 'react'
import { StyledErrorMessage } from './index.styled'

type Props = { text: string }


const ErrorMessage: FC<Props> = ({ text })=> {
    return (
        <StyledErrorMessage>
            {text} 
        </StyledErrorMessage>
    )
}

export default ErrorMessage