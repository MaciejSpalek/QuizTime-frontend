import React, {useState, useEffect} from 'react'
import PageTemplate from '../templates/PageTemplate'
import AuthForm from '../Components/organisms/AuthForm/index'
import Button from '../Components/atoms/Button/index'
import Link from '../Components/atoms/Link/index'
import FormField from '../Components/molecules/FormField/index'
import Input from '../Components/atoms/Input/index'
import Label from '../Components/atoms/Label/index'
import ErrorMessage from '../Components/atoms/ErrorMessage/index'
import { routes } from '../routes/index'
import * as yup from "yup";

import {
    Formik,
    FieldAttributes,
    useField,
    Field
} from "formik";

import {
    TextField,
    withStyles
} from "@material-ui/core";
import api from '../services/api'

// const CssTextField = withStyles({
//     root: {
//         width: '100%',
//         margin: '10px 0',
    
//         '& label.Mui-focused': {
//             // color: 'green'
//             borderBottomColor: 'green',

//         },
//         // '& .MuiInput-underline:after': {
//         //     borderBottomColor: 'green',
//         // },
//         // '& .MuiInput-root': {
//         //     // fontSize: "20px",

//         //     '& fieldset': {
//         //         borderColor: 'red',
//         //     },
//         //     '&:hover fieldset': {
//         //         borderColor: 'yellow',
//         //     },
//         //     '&.Mui-focused fieldset': {
//         //         borderColor: '#00D952',
//         //     },
//         // },
//     },
//   })(TextField);

//   type MyInputProps = { 
//       label?: string
//   } & FieldAttributes<{}>

  
// const MyTextField: React.FC<MyInputProps> = ({ label, ...props }) => {
//     const [field, meta] = useField<{}>(props);
//     const errorText = meta.error && meta.touched ? meta.error : "";
//     return (
//         <CssTextField
//             helperText={errorText}
//             error={!!errorText}
//             id="standard-basic" 
//             label={label}
//             {...field}
//         />    
//     );    
// };    

const validationSchema = yup.object({
    email: yup.string()
        .email('Invalid email')
        .required('Required'),

    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(24, 'Password can be maximum 24 characters')
        .required('Required')
}) 



type Props  = { handleSubmit: (e: any) => void}


const LoginPage: React.FC<Props> = () => {
    const [ response, setResponse ] = useState([])

    const someRequest = async () => {
        return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
    }

    const handleSubmit =  (e: any): void => {
        e.preventDefault();
    }

    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
               

                onSubmit={(values, {setSubmitting}) => {
                        console.log("Enter in submit function", values);
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 500);
                }}>
                {({ 
                    isSubmitting, 
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





