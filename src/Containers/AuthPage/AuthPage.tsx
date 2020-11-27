import React, { useEffect, useState } from 'react'
import PageTemplate from 'templates/PageTemplate/PageTemplate'
import AuthForm from 'templates/FormTemplate/FormTemplate'
import Link from 'Components/atoms/Link/index'
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate'
import Input from 'Components/atoms/Input/index'
import Label from 'Components/atoms/Label/index'
import ErrorMessage from 'Components/atoms/ErrorMessage/ErrorMessage'
import * as yup from "yup"
import { routes } from 'routes/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { Formik } from "formik"
import { authRequest } from 'Auth/requests'
import { setRequestStatus } from 'redux/Actions/sessionActions'
import { RouteComponentProps } from 'react-router-dom'
import { StyledButton } from './AuthPage.styled'

const validationSchema = yup.object({
    name: yup.string()
        .required('Required')
        .min(3, 'Name must be at least 3 characters')
        .max(15, 'Name can be maximum 15 characters'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(100, 'Password can be maximum 24 characters')
        .required('Required')
});



const AuthPage = ({ history }: RouteComponentProps) => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const dispatch = useDispatch();

    const isDisabledButton = (errors: any, touched: any, isSubmitting: boolean) => {
        if(isFirstRender) return true;     
        return (!!(errors.name || errors.password) && touched) || isSubmitting;
    }

    const inputFunctionsHandler = (handleOnFunction: any, e: Event) => {
        handleOnFunction(e)
        dispatch(setRequestStatus(true))
        setIsFirstRender(false);
    }

    const isLoginRoute = () => {
        return history.location.pathname === routes.login
    }

    useEffect(() => {
        let timeout: number
        if (isAuthenticated) {
            timeout = setTimeout(() => {
                history.push(`/${user}`);
            });
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [isAuthenticated, history, user]);

    return (
        <PageTemplate>
            <Formik
                validationSchema={validationSchema}
                validateOnChange={true}
                initialValues={{
                    name: "",
                    password: ""
                }}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    isLoginRoute() ?
                        authRequest('login', data, dispatch) :
                        authRequest('register', data, dispatch);
                    setSubmitting(true);
                    setTimeout(() => {
                        resetForm();
                        setSubmitting(false)
                        setIsFirstRender(true);
                    }, 2000)
                }}>
                {({
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    touched,
                    values,
                    errors
                }) => (
                        <AuthForm handleSubmit={handleSubmit}>
                            <FormField>
                                <Label
                                    text="Name"
                                    forText="name"
                                />
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    ariaInvalid={true}
                                    ariaDescribedBy="err_1"
                                    onChange={(e: Event) => inputFunctionsHandler(handleChange, e)}
                                    onBlur={(e: Event) => inputFunctionsHandler(handleBlur, e)}
                                    isRequired={true}
                                />
                                {errors.name && touched.name ? 
                                    <ErrorMessage id="err_1" text={errors.name} /> : null}
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
                                    onChange={(e: Event) => inputFunctionsHandler(handleChange, e)}
                                    onBlur={(e: Event) => inputFunctionsHandler(handleBlur, e)}
                                    isRequired={true}
                                />
                                {errors.password && touched.password ? 
                                    <ErrorMessage id="err_2" text={errors.password} /> : null}
                            </FormField>
                            <StyledButton
                                type="submit"
                                text={isLoginRoute() ? "Log in" : "Register"}
                                isDisabled={isDisabledButton(errors, touched, isSubmitting)}
                            />
                            <Link
                                text={isLoginRoute() ? "Create an acconut" : "Do you have an account ?"}
                                to={isLoginRoute() ? routes.register : routes.login}
                                type="Link"
                            />
                        </AuthForm>
                    )}
            </Formik>
        </PageTemplate>
    )
}

export default AuthPage