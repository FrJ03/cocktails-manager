'use client'
import { useEffect, useState } from "react";
import AuthForm from "./components/auth-form";
import * as AuthService from './services/auth.service'

export default function Auth(){
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            setUsername(userLogged.username)
            setEmail(userLogged.email)
            setToken(userLogged.token)
        }
    }, [])

    const onSubmit = async (email: string, password: string) => {
        const res: AuthService.AuthData = await AuthService.auth(email, password)
        if(res.code === 200 && res.token !== undefined && res.user !== undefined && res.user.username !== undefined && res.user.email !== undefined){
            setToken(res.token)
            setUsername(res.user.username)
            setEmail(res.user.email)

            window.localStorage.setItem('loggedUser', JSON.stringify({
                    username: res.user.username,
                    email: res.user.email,
                    token: res.token
            }))
        }
        else{
            setErrorMessage('Incorrect email or password')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
        }
    }

    return token === '' || username === '' || email === '' ?
            (
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <AuthForm onSubmit={onSubmit}/>
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                </main>
            )
        :
            (
                <p data-testid='logged-message'>logged {username}</p>
            )
}