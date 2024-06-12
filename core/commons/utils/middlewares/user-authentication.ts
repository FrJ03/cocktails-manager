import {Request, Response, NextFunction} from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import * as config from '../config'

const userAuthorization = (request: Request, response: Response, next: NextFunction) => {
    if(request.headers.authorization === undefined){
        response.sendStatus(401)
    }
    else{
        const decodedToken = jwt.decode(`${request.headers.authorization}`)
        
        if (typeof decodedToken == 'string' || decodedToken === null) {
            response.sendStatus(401)
        }
        else{
            next()
        }
    }
    
}

export { userAuthorization }