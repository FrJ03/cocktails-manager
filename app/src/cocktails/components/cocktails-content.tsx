import CocktailCard from './cocktail-card'

export default function CocktailsContent(){
    const cocktails = [
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/916049866/es/foto/margarita-cl%C3%A1sico-coctel-con-cal.jpg?s=612x612&w=0&k=20&c=dfH8w6bPAFoLNwWBUHOFMWWcUvN52EBiiL07hkLglAI='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        },
        {
            id: '1',
            name: 'cocktail test',
            image: 'https://media.istockphoto.com/id/502072256/photo/craft-cocktail-assortment-on-well-lit-bar.jpg?s=612x612&w=0&k=20&c=zmxOgUMZW1kB--D-g8RABi391Ma39zemxeUyjWFb7R0='
        }
    ]

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