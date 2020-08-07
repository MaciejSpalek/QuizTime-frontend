import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import AuthForm from '../Components/molecules/AuthForm/index'
import Input from '../Components/atoms/Input/index'
import Label from '../Components/atoms/Label/index'
import Button from '../Components/atoms/Button/index'

const LoginPage = ()=> {
    return (
        <PageTemplate>
            <AuthForm>
                <Label forText=""/> 
                <Input type="email" />

                <Label /> 
                <Input type="password" />

                <Button text="Log in" />
            </AuthForm>
        </PageTemplate>
    )
}

export default LoginPage