import { useState, useEffect } from 'react'
import Menu from '../commons/components/menu'
import SearchBar from '../commons/components/searchBar'
import CocktailsContent from './components/cocktails-content'
import * as cocktailsServices from './services/cocktails.service'

export default function Cocktails (){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const userLogged = JSON.parse(loggedUserJSON)
            setUsername(userLogged.username)
            setEmail(userLogged.email)
            setToken(userLogged.token)
        }
        else{
            //navigate('/auth')
        }
    }, [])

    cocktailsServices.getAll(token).then(res => res)

    return (
        <>
            <Menu/>
            <div className="flex justify-center m-5">
                <SearchBar/>
            </div>
            <CocktailsContent/>
        </>
    )
}