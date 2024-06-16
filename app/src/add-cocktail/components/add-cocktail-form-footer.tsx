interface AddCocktailFormFooterProperties{
    onSubmit: () => void
}

export default function AddCocktailFormFooter(properties: AddCocktailFormFooterProperties){
    return (
        <button
                    data-testid='log-button'
                    onClick={properties.onSubmit}
                    className="text-white bg-main-color hover:bg-horved-main-color font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 focus:outline-none"
                >
                    Create
                </button>
    )
}