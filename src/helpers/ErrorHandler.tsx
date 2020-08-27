import React from 'react';
import ErrorMessage from '../Components/atoms/ErrorMessage/index'

type Props = {
    requestStatus:boolean
    requestMessage:string
    value: string
    touched: any 
    errors: any
}

const ErrorHandler: React.FC<Props> = ({
    requestStatus,
    requestMessage,
    value,
    touched,
    errors
}): any => {
    if(requestStatus && errors[value] && touched[value]) {
        return <ErrorMessage text={errors[value]} />
    } else if(!requestStatus) {
        return <ErrorMessage text={requestMessage} />
    } else {
        return null;
    }
}

export default ErrorHandler