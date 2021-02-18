import React, { ChangeEvent, useEffect, useState } from 'react';
import ErrorMessage from 'Components/atoms/ErrorMessage';
import FormField from 'templates/FormFieldTemplate';
import Input from 'Components/atoms/Input/Input';
import { setRequestStatus } from 'redux/Actions/sessionActions';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { capitalizeFirstLetter } from 'helpers/string';
import { authPageValidation } from './validation';
import { authRequest } from 'services/auth';
import { IData } from './AuthPage.model';
import { RootState } from 'redux/store';
import { routes } from 'routes/index';
import { Formik } from "formik";
import {
    StyledContainer,
    StyledAuthForm,
    StyledButton,
    StyledLabel,
    StyledPhoto,
    StyledLink
} from './AuthPage.styled';

const AuthPage = ({ history }: RouteComponentProps) => {
    const dispatch = useDispatch();
    const [isFirstRender, setIsFirstRender] = useState(true);
    const isAuthenticated = useSelector<RootState, boolean>(state => state.session.isAuthenticated);
    const serverStatus = useSelector<RootState>(state => state.status.isTheServerConnected);
    const user = useSelector<RootState, string | null>(state => state.session.loggedUser);

    const isLoginRoute = () => history.location.pathname === routes.login;
    const isDisabledButton = (errors: any, touched: any, isSubmitting: boolean) => {
        if (isFirstRender) return true;
        if (isLoginRoute()) return (!!(errors.name || errors.password) && touched) || isSubmitting;
        else return (!!(errors.name || errors.password || errors.email) && touched) || isSubmitting;
    };

    const inputFunctionsHandler = (
        handleOnFunction: (e: ChangeEvent<HTMLInputElement>) => void,
        setFieldValue: (field: string, value: any) => void,
        e: ChangeEvent<HTMLInputElement>,
        isCaptalized: boolean = false
    ) => {
        dispatch(setRequestStatus(true));
        setIsFirstRender(false);
        handleOnFunction(e);
        isCaptalized ?
            setFieldValue(e.target.name, capitalizeFirstLetter(e.target.value.trim())) :
            setFieldValue(e.target.name, e.target.value.trim())
    };

    const onSubmit = (
        data: IData,
        setSubmitting: (value: boolean) => void,
        resetForm: () => void
    ) => {
        const { name, password } = data;
        isLoginRoute() ?
            authRequest('login', { name, password }, dispatch) :
            authRequest('register', data, dispatch);
        setSubmitting(true);
        setTimeout(() => {
            resetForm();
            setSubmitting(false);
            setIsFirstRender(true);
        }, 2000)
    }

    useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                history.push(`/${user}`);
            }, 500);
        }
    }, [isAuthenticated, history, user]);

    return (
        <StyledContainer>
            <Formik
                validationSchema={authPageValidation(isLoginRoute())}
                initialValues={{ name: "", email: "", password: "" }}
                validateOnChange={true}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                    onSubmit(data, setSubmitting, resetForm);
                }}>
                {({
                    setFieldValue,
                    isSubmitting,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    touched,
                    values,
                    errors
                }) => (
                    <StyledAuthForm onSubmit={handleSubmit}>
                        {!isLoginRoute() && <FormField>
                            <StyledLabel
                                text="E-mail"
                                forText="email"
                            />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={values.email}
                                ariaInvalid={true}
                                ariaDescribedBy="err_1"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleChange, setFieldValue, e)}
                                onBlur={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleBlur, setFieldValue, e)}
                                isRequired={true}
                            />
                            {errors.email && touched.email ?
                                <ErrorMessage id="err_1" text={errors.email} /> : null}
                        </FormField>}
                        <FormField>
                            <StyledLabel
                                text="Name"
                                forText="name"
                            />
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={values.name}
                                ariaInvalid={true}
                                ariaDescribedBy="err_2"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleChange, setFieldValue, e, true)}
                                onBlur={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleBlur, setFieldValue, e, true)}
                                isRequired={true}
                            />
                            {errors.name && touched.name ?
                                <ErrorMessage id="err_2" text={errors.name} /> : null}
                        </FormField>
                        <FormField>
                            <StyledLabel
                                text="Password"
                                forText="password"
                            />
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={values.password}
                                ariaInvalid={true}
                                ariaDescribedBy="err_3"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleChange, setFieldValue, e)}
                                onBlur={(e: ChangeEvent<HTMLInputElement>) => inputFunctionsHandler(handleBlur, setFieldValue, e)}
                                isRequired={true}
                            />
                            {errors.password && touched.password ?
                                <ErrorMessage id="err_3" text={errors.password} /> : null}
                        </FormField>
                        {serverStatus ? <StyledButton
                            type="submit"
                            isDisabled={isDisabledButton(errors, touched, isSubmitting)}>
                            {isLoginRoute() ? "Log in" : "Register"}
                        </StyledButton> :
                        <StyledButton
                            type="submit"
                            isDisabled={isDisabledButton(errors, touched, isSubmitting)}
                            isSpinner
                        />}
                        <StyledLink
                            text={isLoginRoute() ? "Create an acconut" : "Do you have an account ?"}
                            to={isLoginRoute() ? routes.register : routes.login}
                            aria-label={isLoginRoute() ? "Go to register form" : "Go to login form"}
                        />
                    </StyledAuthForm>
                )}
            </Formik>
            <StyledPhoto />
        </StyledContainer>
    );
};

export default AuthPage;