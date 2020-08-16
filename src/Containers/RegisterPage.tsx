import React, {useState, useEffect} from 'react'
import PageTemplate from '../templates/PageTemplate'
import AuthForm from '../Components/organisms/AuthForm/index'
import Button from '../Components/atoms/Button/index'
import Link from '../Components/atoms/Link/index'
import FormField from '../Components/molecules/FormField/index'
import Input from '../Components/atoms/Input/index'
import Label from '../Components/atoms/Label/index'
import ErrorMessage from '../Components/atoms/ErrorMessage/index'
import api from '../services/api'
import { routes } from '../routes/index'
import * as yup from "yup";
import {
    Formik
} from "formik";



const validationSchema = yup.object({
    nick: yup.string()
        .required('Required')
        .min(5, 'Nick must be at least 5 characters')
        .max(20, 'Nick can be maximum 20 characters'),
    email: yup.string()
        .email('Invalid email')
        .required('Required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Required')
});    


const RegisterPage: React.FC = () => {
    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    nick: "",
                    email: "",
                    password: "",
                }}

                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    console.log(data)
                }}>
                {({ 
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
                                text="Nick"
                                forText="nick"
                            />
                            <Input
                                id="nick" 
                                type="nick"
                                name="nick"
                                value={values.nick}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isRequired={true}
                            />
                            {errors.nick && touched.nick ? (
                                <ErrorMessage text={errors.nick} />
                            ) : null}
                        </FormField>
                        <FormField>
                            <Label 
                                text="Email"
                                forText="email"
                            />
                            <Input
                                id="email" 
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isRequired={true}
                            />
                            {errors.email && touched.email ? (
                                <ErrorMessage text={errors.email} />
                            ) : null}
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isRequired={true}
                            />
                            {errors.password && touched.password ? (
                                <ErrorMessage text={errors.password} />
                            ) : null}
                        </FormField>
                        <Button text="Register" />
                        <Link 
                            to={routes.login}
                            type="Link"
                            text="Create an acconut"
                        />
                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}
export default RegisterPage