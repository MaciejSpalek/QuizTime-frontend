import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import AuthForm from '../Components/organisms/AuthForm/index'
import Button from '../Components/atoms/Button/index'
import Link from '../Components/atoms/Link/index'
import { routes } from '../routes/index'
import * as yup from "yup";

import {
    Formik,
    FieldAttributes,
    useField
} from "formik";

import {
    TextField,
    withStyles
} from "@material-ui/core";

const CssTextField = withStyles({
    root: {
        width: '100%',
        margin: '10px 0',
    
        '& label.Mui-focused': {
            borderBottomColor: 'green',

        },
    },
  })(TextField);

  type MyInputProps = { 
      label?: string;
      placeholder?: string; 
  } & FieldAttributes<{}>

  
const MyTextField: React.FC<MyInputProps> = ({
    label,
    placeholder,
    ...props
}) => {
    const [field, meta] = useField<{}>(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <CssTextField
            placeholder={placeholder}
            helperText={errorText}
            id="standard-basic" 
            label={label}
            error={!!errorText}
            {...field}
        />    
    );    
};    

const validationSchema = yup.object({
    nick: yup.string().required().min(3).max(20),
    email: yup.string().required().max(50),
    password: yup.string().required().max(20)
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
                    // make async call
                    setSubmitting(false)
                    console.log("coś")
                    setSubmitting(true)
                }}>

                {({ values, errors, isSubmitting }) => (
                    <form>
                        <MyTextField 
                            name="nick"
                            label="Nick" 
                            required
                        />
                        <MyTextField 
                            name="email"
                            label="Email" 
                            required
                        />
                        <MyTextField 
                            name="password"
                            label="Password" 
                            required
                        />
                        <Button text="Register" />
                        <Link 
                            type="Link"
                            to={routes.login}
                            text="Have you account?"
                        />
                    </form>
                )}
            </Formik>
        </PageTemplate>
    )
}
export default RegisterPage