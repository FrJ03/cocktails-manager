import express, {Express, Request, Response} from 'express'
import { LoginUserRequest } from '../../dto/requests/login-user.request'
import { container } from '../../../commons/container/container'
import { LoginUserResponse } from '../../dto/responses/login-user.response'
const LoginRouter = express.Router()

LoginRouter.post('/', async (request: Request, response: Response) => {
    if(
        !request.body.email ||
        request.body.email == '' ||
        !request.body.password ||
        request.body.password == ''
    ){
        response.sendStatus(400)
    }
    else{
        const userRequest = LoginUserRequest.with({
            email: request.body.email,
            password: request.body.password
        })
    
        const userResponse: LoginUserResponse = await container.loginUser.with(userRequest)
    
        response.status(userResponse.code || 200).send(userResponse)
    }
})

export { LoginRouter }