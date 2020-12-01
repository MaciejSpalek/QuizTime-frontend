import React, { ChangeEvent, useEffect, useState } from 'react';
import PageTemplate from 'templates/PageTemplate/PageTemplate';
import AuthForm from 'templates/FormTemplate/FormTemplate';
import FormField from 'templates/FormFieldTemplate/FormFieldTemplate';
import Input from 'Components/atoms/Input/Input';
import Label from 'Components/atoms/Label/index';
import ErrorMessage from 'Components/atoms/ErrorMessage/ErrorMessage';
import { routes } from 'routes/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { Formik } from "formik";
import { authRequest } from 'Auth/requests';
import { setRequestStatus } from 'redux/Actions/sessionActions';
import { RouteComponentProps } from 'react-router-dom';
import { StyledButton, StyledLink } from './AuthPage.styled';
import { authPageValidation } from './validation';

const AuthPage = ({ history }: RouteComponentProps) => {
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const user = useSelector<RootState, string | null>(state => state.user.loggedUser);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const dispatch = useDispatch();

    const isDisabledButton = (errors: any, touched: any, isSubmitting: boolean) => {
        if(isFirstRender) return true;     
        return (!!(errors.name || errors.password) && touched) || isSubmitting;
    };

    const inputFunctionsHandler = (handleOnFunction: (e: ChangeEvent<HTMLInputElement>)=> void, e: ChangeEvent<HTMLInputElement>) => {
        handleOnFunction(e);
        dispatch(setRequestStatus(true));
        setIsFirstRender(false);
    };

    const isLoginRoute = () => history.location.pathname === routes.login;

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
                validationSchema={authPageValidation}
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
                        <AuthForm onSubmit={handleSubmit}>
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
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleChange, e)}
                                    onBlur={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleBlur, e)}
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
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleChange, e)}
                                    onBlur={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleBlur, e)}
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
                            <StyledLink
                                text={isLoginRoute() ? "Create an acconut" : "Do you have an account ?"}
                                to={isLoginRoute() ? routes.register : routes.login}
                                type="Link"
                            />
                        </AuthForm>
                    )}
            </Formik>
        </PageTemplate>
    );
};

export default AuthPage;