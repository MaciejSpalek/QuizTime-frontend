import React from 'react';
import ErrorMessage from '../Components/atoms/ErrorMessage';

type Props = {
    id: string
    errors: any
    touched: any 
    value: string
    requestMessage:string
    requestStatus:boolean
}

const ErrorHandler: React.FC<Props> = ({
    id,
    value,
    errors,
    touched,
    requestStatus,
    requestMessage,
}): any => {
    if(errors[value] && touched[value]) {
        return <ErrorMessage id={id} text={errors[value]} />
    } else if(!requestStatus) {
        return <ErrorMessage id={id} text={requestMessage} />
    } else {
        return null;
    }
}

export default ErrorHandler