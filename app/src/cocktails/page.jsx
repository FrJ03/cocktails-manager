import Menu from '../commons/components/menu'
import SearchBar from '../commons/components/searchBar'
import CocktailsContent from './components/cocktails-content'

export default function Cocktails (){
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