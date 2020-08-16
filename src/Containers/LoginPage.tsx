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
    email: yup.string()
        .email('Invalid email')
        .required('Required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Required')
}) 





const LoginPage: React.FC = () => {
    // const [ response, setResponse ] = useState([])

    // const someRequest = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => setResponse(json))
    // }

    // useEffect(()=> {
    //     console.log(response)
    // }, [response])

    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
               

                onSubmit={(values, { setSubmitting }) => {
                    // api.get('1').then(json => setResponse(json))
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
                        <Button text="Log in" />
                        <Link 
                            to={routes.register}
                            type="Link"
                            text="Create an acconut"
                        />
                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}

export default LoginPage





