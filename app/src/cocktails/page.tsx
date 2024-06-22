import { useState, useEffect } from 'react'
import Menu from '../commons/components/menu'
import SearchBar from '../commons/components/searchBar'
import CocktailsContent from './components/cocktails-content'
import * as cocktailsServices from './services/cocktails.service'
import { useNavigate } from 'react-router-dom'

export default function Cocktails (){
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    const [cocktails, setCocktails] = useState([] as Array<{
        id: string,
        name: string,
        image: string
    }>)

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

    cocktailsServices.getAll(token).then(res => {
        if(res != undefined){
            setCocktails(res.cocktails)
        }
    })

    const deleteCocktail = (id: string) => {
        cocktailsServices.deleteCocktail(id, token)
    }

    return (
        <div className='flex-col justify-between'>
            <Menu/>
            <div className="flex justify-center pt-32 pb-10">
                <SearchBar/>
            </div>
            <CocktailsContent cocktails={cocktails} deleteCocktail={deleteCocktail}/>
        </div>
    )
}