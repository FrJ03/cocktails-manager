'use client'
import { useEffect, useState } from "react";
import AuthForm from "./components/auth-form";
import * as AuthService from './services/auth.service'
import { useNavigate } from "react-router-dom";

export default function Auth(){
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            navigate('/cocktails')
        }
    }, [navigate])

    const onSubmit = async (email: string, password: string) => {
        const res: AuthService.AuthData = await AuthService.auth(email, password)
        if(res.code === 200 && res.token !== undefined && res.user !== undefined && res.user.username !== undefined && res.user.email !== undefined){

            window.localStorage.setItem('loggedUser', JSON.stringify({
                    username: res.user.username,
                    email: res.user.email,
                    token: res.token
            }))
            navigate('/cocktails')
        }
        else{
            setErrorMessage('Incorrect email or password')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
        }
    }

    return (
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <AuthForm onSubmit={onSubmit}/>
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                </main>
            )
}