import { Card } from "@nextui-org/card";
import AddCocktailFormHeader from "./add-cocktail-form-header";
import AddCocktailFormBody from "./add-cocktail-form-body";
import { useState } from "react";
import AddCocktailFormFooter from "./add-cocktail-form-footer";

interface AddCocktailFormProperties{
    onSubmit: (name: string, image: string) => void
}

export default function AddCocktailForm(properties: AddCocktailFormProperties){
    const [name, setName] = useState('')
    const [image, setImage] = useState('')

    const onChangeName = (newName: string) => setName(newName)
    const onChangeImage = (newImage: string) => setImage(newImage)

    const onSubmit = async () => {
        await properties.onSubmit(name, image)
    }

    return (
        <div className="flex justify-center">
        <Card className='flex-col max-w-[400px] pt-32'>
            <AddCocktailFormHeader/>
            <AddCocktailFormBody
                name={name}
                onChangeName={onChangeName}
                image={image}
                onChangeImage={onChangeImage}
            />
            <AddCocktailFormFooter onSubmit={onSubmit}/>
        </Card>
        </div>
    )
}