import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { AiFillDelete } from 'react-icons/ai'

interface CocktailCardProperties{
    cocktail: {
        id: string,
        name: string,
        image: string
    },
    deleteCocktail: (id: string) => void
}

export default function CocktailCard({cocktail, deleteCocktail}: CocktailCardProperties){
    return (
        <Card className='size-40 rounded outline outline-main-color outline-offset-2 hover:outline-4' isPressable disableAnimation isHoverable>
          <CardHeader className='fix justify-end'>
            <div className='bg-red-500 p-1 rounded-md'>
              <AiFillDelete color='white' onClick={() => deleteCocktail(cocktail.id)}/>
            </div>
          </CardHeader>
          <CardBody className="place-items-center overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              alt={cocktail.name}
              className="size-full object-cover max-h-20"
              src={cocktail.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{cocktail.name}</b>
          </CardFooter>
        </Card>
    )
}