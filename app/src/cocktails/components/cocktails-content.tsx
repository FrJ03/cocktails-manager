import CocktailCard from './cocktail-card'

interface CocktailsContentProperties{
    cocktails: Array<{
        id: string,
        name: string,
        image: string
    }>
}

export default function CocktailsContent({cocktails}: CocktailsContentProperties){
    return (
        <>
            <div
                className="grid grid-cols-2 place-items-center gap-6 md:grid-cols-4 lg:grid-cols-6"
                role="grid"
            >
                {cocktails.map((cocktail) => (
                    <CocktailCard cocktail={cocktail} key={cocktail.id} />
                ))}
            </div>
        </>
    )
}