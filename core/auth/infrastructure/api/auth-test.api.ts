import express, {Express, Request, Response} from 'express'
import { UserMongo } from '../persistence/user.type'
import bcrypt from 'bcrypt'
const AuthTestRouter = express.Router()

AuthTestRouter.post('/', async (request: Request, response: Response) => {
    if(!request.body.email || !request.body.password || !request.body.username){
        response.sendStatus(400)
    }

    const encryptedPassword = await bcrypt.hash(request.body.password, 10)

    const newUser = new UserMongo({
        username: request.body.username,
        email: request.body.email,
        password: encryptedPassword
    })

    await newUser.save()

    response.sendStatus(200)
})

AuthTestRouter.delete('/', async (request: Request, response: Response) => {
    await UserMongo.deleteMany({})

    response.sendStatus(200)
})

export { AuthTestRouter }