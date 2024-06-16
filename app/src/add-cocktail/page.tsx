import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from "../commons/components/menu"
import AddCocktailForm from "./components/add-cocktail-form"
import * as AddCocktailService from './services/add-cocktail.service'

export default function AddCocktail(){
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            setToken(userLogged.token)
        }
        else{
            navigate('/auth')
        }
    }, [navigate])

    const onSubmit = async (name: string, image: string) => {
        await AddCocktailService.create(name, image, token)
        navigate('/cocktails')
    }

    return (
        <>
            <Menu/>
            <AddCocktailForm onSubmit={onSubmit}/>
        </>
    )
}