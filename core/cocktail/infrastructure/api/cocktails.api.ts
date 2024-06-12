import express, {Express, Request, Response} from 'express'
import { container } from '../../../commons/container/container'
import { GetCocktailsResponse } from '../../dto/response/get-cocktails.response'
const CocktailsRouter = express.Router()

CocktailsRouter.get('/', async (req: Request, res: Response) => {

    const cocktails: GetCocktailsResponse = await container.getCocktails.with()

    res.status(200).send(cocktails)
})

export { CocktailsRouter }