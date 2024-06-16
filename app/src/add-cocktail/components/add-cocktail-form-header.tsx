import { CardHeader } from "@nextui-org/card";

export default function AddCocktailFormHeader(){
    return (
        <>
            <CardHeader>
                <h1 className="text-4xl">
                    <strong>New Cocktail</strong>
                </h1>
            </CardHeader>
        </>
    )
}