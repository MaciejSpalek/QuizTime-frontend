import React, { useEffect } from 'react'
import PageTemplate from '../templates/PageTemplate'
import AuthForm from '../Components/organisms/AuthForm/index'
import Button from '../Components/atoms/Button/index'
import Link from '../Components/atoms/Link/index'
import FormField from '../Components/molecules/FormField/index'
import Input from '../Components/atoms/Input/index'
import Label from '../Components/atoms/Label/index'
import ErrorMessage from '../Components/atoms/ErrorMessage/index'
import ErrorHandler from '../helpers/ErrorHandler'
import * as yup from "yup"
import { routes } from '../routes/index'
import { Formik } from "formik"
import { register } from '../Auth/requests'
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from '../redux/store'
import { setRequestStatus } from '../redux/Actions/sessionActions'
import { isInaccessible } from '@testing-library/react'


const validationSchema = yup.object({
    username: yup.string()
        .required('Required')
        .min(5, 'Username must be at least 5 characters')
        .max(20, 'Username can be maximum 20 characters'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Required')
});    

type Props = { history: any }

const RegisterPage: React.FC<Props> = ({ history }) => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const requestMessage = useSelector<RootState, string>(state => state.session.errorMessage)
    const requestStatus = useSelector<RootState, boolean>(state => state.session.requestStatus)
    const dispatch = useDispatch()

    const inputFunctionsHandler = (onHandler: any, e: Event) => {
        onHandler(e)
        dispatch(setRequestStatus(true))
    }
  
    useEffect(() => {
        let timeout: number;
        if (isAuthenticated) {
            timeout = setTimeout(() => {
                history.push('/profile')
            })
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [isAuthenticated, history]);

    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    username: "",
                    password: ""
                }}

                validationSchema={validationSchema}
                onSubmit={(data, {setSubmitting, resetForm}) => {
                    register(data, dispatch)
                    setSubmitting(true);
                    setTimeout(() => {
                        resetForm()
                        setSubmitting(false)
                    }, 2000);
                }}>
                
                {({ 
                    isSubmitting,
                    handleSubmit,
                    handleChange, 
                    handleBlur,
                    touched, 
                    values, 
                    errors,
                }) => (
                    <AuthForm handleSubmit={handleSubmit}>
                        <FormField>
                            <Label 
                                text="Username"
                                forText="username"
                            />
                            <Input
                                id="username" 
                                type="username"
                                name="username"
                                value={values.username}
                                ariaInvalid={true}
                                ariaDescribedBy="err_1"
                                onChange={(e: Event)=> inputFunctionsHandler(handleChange, e)}
                                onBlur={(e: Event)=> inputFunctionsHandler(handleBlur, e)}
                                isRequired={true}
                            />
                            <ErrorHandler 
                                id="err_1"
                                value="username"
                                requestMessage={requestMessage}
                                requestStatus={requestStatus}
                                touched={touched}
                                errors={errors}
                            />
                        </FormField>
                        <FormField>
                            <Label 
                                text="Password"
                                forText="password"
                            />
                            <Input 
                                id="password"
                                type="password"
                                name="password"
                                value={values.password}
                                ariaInvalid={true}
                                ariaDescribedBy="err_2"
                                onChange={(e: Event)=> inputFunctionsHandler(handleChange, e)}
                                onBlur={(e: Event)=> inputFunctionsHandler(handleBlur, e)}
                                isRequired={true}
                            />
                            {errors.password && touched.password ? (
                                <ErrorMessage id="err_2" text={errors.password} />
                            ) : null}
                        </FormField>
                        <Button 
                            type="submit" 
                            text="Register" 
                            isDisabled={isSubmitting}
                        />
                        <Link 
                            to={routes.login}
                            type="Link"
                            text="Do you have an account ?"
                        />
                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}
export default RegisterPage