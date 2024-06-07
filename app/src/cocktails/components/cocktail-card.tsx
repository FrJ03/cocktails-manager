import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'

interface CocktailCardProperties{
    cocktail: {
        id: string,
        name: string,
        image: string
    }
}

export default function CocktailCard({cocktail}: CocktailCardProperties){
    return (
        <Card className='size-40 rounded outline outline-main-color outline-offset-2 hover:outline-4' isPressable disableAnimation isHoverable>
          <CardBody className="place-items-center overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              alt={cocktail.name}
              className="size-fit object-cover h-32"
              src={cocktail.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{cocktail.name}</b>
          </CardFooter>
        </Card>
    )
}