import { CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

interface AddCocktailFormBodyProperties{
    name: string,
    onChangeName: (newName: string) => void,
    image: string,
    onChangeImage: (newImage: string) => void
}

export default function AddCocktailFormBody(properties: AddCocktailFormBodyProperties){

    return (
        <CardBody>
            <Input
                fullWidth={true}
                type="text"
                label="Name"
                placeholder="Cocktail name"
                value={properties.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => properties.onChangeName(event.target.value)}
            />
            <Input
                fullWidth={true}
                type="url"
                label="Image"
                placeholder="Image URL"
                value={properties.image}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => properties.onChangeImage(event.target.value)}
            />
        </CardBody>
    )
}