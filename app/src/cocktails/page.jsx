import Menu from '../commons/components/menu'
import SearchBar from '../commons/components/searchBar'

export default function Cocktails (){
    return (
        <>
            <Menu/>
            <div className="flex justify-center m-5">
                <SearchBar/>
            </div>
            <p>CocktailsView</p>
        </>
    )
}