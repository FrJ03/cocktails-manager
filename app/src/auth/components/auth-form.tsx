'use client'
import { useState } from 'react'
import { Card } from '@nextui-org/card'
import AuthFormHeader from './auth-form-header'
import AuthFormBody from './auth-form-body'
import AuthFormFooter from './auth-form-footer'

interface AuthFormProperties{
    onSubmit: (email: string, password: string) => void
}

export default function AuthForm(properties: AuthFormProperties){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onChangeEmail = (email: string) => setEmail(email)
    const onChangePassword = (password: string) => setPassword(password)

    const onSubmit = () => {
        properties.onSubmit(email, password)
    }

    return (
            <Card className='flex-col max-w-[400px] '>
                <AuthFormHeader/>
                <AuthFormBody
                    email={email}
                    password={password}
                    onChangeEmail={onChangeEmail}
                    onChangePassword={onChangePassword}
                />
                <AuthFormFooter onSubmit={onSubmit}/>
            </Card>
    )
}