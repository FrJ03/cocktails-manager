import express, {Express, Request, Response} from 'express'
import { container } from '../../../commons/container/container'
import { GetCocktailsResponse } from '../../dto/response/get-cocktails.response'
import { CreateCocktailRequest } from '../../dto/request/create-cocktail.request'
const CocktailsRouter = express.Router()

CocktailsRouter.get('/', async (req: Request, res: Response) => {

    const cocktails: GetCocktailsResponse = await container.getCocktails.with()

    res.status(200).send(cocktails)
})

CocktailsRouter.post('/', async (req: Request, res: Response) => {
    const cocktail = {
        name: req.body.name,
        image: req.body.image
    } as CreateCocktailRequest

    const isCreated = await container.createCocktail.with(cocktail)

    if(isCreated){
        res.sendStatus(200)
    }
    else{
        res.sendStatus(400)
    }
})

CocktailsRouter.delete('/', async (req: Request, res:Response) => {
    if(req.query.id !== undefined){
        const isDeleted = await container.deleteCocktail.with({id: req.query.id.toString()})

        if(isDeleted){
            res.sendStatus(200)
        }
        else{
            res.sendStatus(404)
        }
    }
    else{
        res.sendStatus(400)
    }
})

export { CocktailsRouter }