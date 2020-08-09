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
            // color: 'green'
            borderBottomColor: 'green',

        },
        // '& .MuiInput-underline:after': {
        //     borderBottomColor: 'green',
        // },
        // '& .MuiInput-root': {
        //     // fontSize: "20px",

        //     '& fieldset': {
        //         borderColor: 'red',
        //     },
        //     '&:hover fieldset': {
        //         borderColor: 'yellow',
        //     },
        //     '&.Mui-focused fieldset': {
        //         borderColor: '#00D952',
        //     },
        // },
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
    email: yup.string().required().min(3).max(15),
    password: yup.string().required().max(20)
});    



const LoginPage: React.FC = () => {
    return (
        <PageTemplate>
            <Formik
                validateOnChange={true}
                initialValues={{
                    email: "",
                    password: "",
                }}

                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    // make async call
                }}>

                {({ values, errors, isSubmitting }) => (
                    <AuthForm>
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
                        <Button text="Log in" />
                        <Link 
                            type="Link"
                            to={routes.register}
                            text="Create an acconut"
                        />
                        {/* <pre>{JSON.stringify(values, null, 1)}</pre>
                        <pre>{JSON.stringify(errors, null, 1)}</pre> */}

                    </AuthForm>
                )}
            </Formik>
        </PageTemplate>
    )
}

export default LoginPage





