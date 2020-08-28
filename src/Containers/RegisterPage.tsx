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
import ErrorHandler from '../helpers/ErrorHandler'
import { setCookie, showCookie, fakeToken, getExpireDate } from '../helpers/cookies'
import { setIsAuthenticatedState } from '../redux/Actions/sessionActions'


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
    const [ response, setResponse ] = useState<any>(null)
    const [ requestStatus, setRequestStatus ] = useState<boolean>(true)
    const [ requestMessage, setRequestMessage ] = useState<string>("")
    
    const inputFunctionsHandler = (onFunction: any, e: Event) => {
        onFunction(e)
        setRequestStatus(true)
    }

    useEffect(()=> {
        // console.log(response, requestStatus, requestMessage)    
        // console.log(getExpireDate("30"))
        // console.log(seconds_since_epoch())
        // document.cookie = "token=`dsahd32dn982n3s23023`; expires=`${}`"
        // console.log(typeof new Date())
        // setCookie("token", "dsdasddsadsad2ssad", getExpireDate("30"))
        // console.log(typeof showCookie("token"))
        console.log("działa")
    }, [showCookie("token")])

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
                    api.post('/register', data)
                        .then(res => {
                            if (res.ok) {
                                setRequestStatus(true)
                                setRequestMessage("")
                                return res.json()
                            } else {
                                setCookie("token", "dsadsafdsf3joir2ijd32o32oin23");
                                setCookie("expires", `${new Date()}`);
                                setRequestStatus(false)
                                setRequestMessage(res.statusText)
                                throw new Error(res.statusText)
                            }
                        }).then(res => {
                            setResponse(res)
                        }).catch(error => {
                            console.error(error)
                        });
                        // .then(json => setResponse(json))
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
                                onChange={(e: Event)=> inputFunctionsHandler(handleChange, e)}
                                onBlur={(e: Event)=> inputFunctionsHandler(handleBlur, e)}
                                isRequired={true}
                            />
                            <ErrorHandler 
                                value={values.username}
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isRequired={true}
                            />
                            {/* {errors.password && touched.password ? (
                                <ErrorMessage text={okRequestStatus ? errors.password : requestMessage} />
                            ) : null} */}


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