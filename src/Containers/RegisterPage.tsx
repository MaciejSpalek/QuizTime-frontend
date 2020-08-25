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
import * as yup from "yup";
import { routes } from '../routes/index'
import { Formik } from "formik";
import { setCookie } from '../helpers/cookies'



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


const RegisterPage: React.FC = () => {
    const [ response, setResponse ] = useState<any>([])

    useEffect(()=> {
        console.log(response)
    }, [response])

    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    username: "",
                    password: ""
                }}

                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    
                    api.post('/register', data).then(json => {
                        setResponse(json)
                        setCookie("token", json.token)
                    })      
                    
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
                                text="Username"
                                forText="username"
                            />
                            <Input
                                id="username" 
                                type="username"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isRequired={true}
                            />
                            {errors.username && touched.username ? (
                                <ErrorMessage text={errors.username} />
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
                            text="Do you have an account ?"
                        />
                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}
export default RegisterPage