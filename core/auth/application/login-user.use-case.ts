import { Email } from "../domain/model/value-objects/email";
import { Users } from "../domain/services/users.repository";
import { LoginUserRequest } from "../dto/requests/login-user.request";
import { LoginUserResponse } from "../dto/responses/login-user.response";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as config from '../../commons/utils/config'

export class LoginUserUseCase {
    constructor(private readonly users: Users) {}

    async with(command: LoginUserRequest): Promise<LoginUserResponse>{
        const email = Email.create(command.email)
        if(email !== undefined){
            try {
                const user = await this.users.findByEmail(email)
                const passwordCorrect = await bcrypt.compare(command.password, user.password)

                if (!passwordCorrect){
                    return {
                        username: undefined,
                        email: undefined,
                        token: undefined,
                        code: 400
                    } as LoginUserResponse
                }

                const userForToken = {
                    username: user.username,
                    email: user.email,
                    id: user.id,
                }

                const token = jwt.sign(userForToken, config.SECRET || '')
                
                return {
                    username: user.username,
                    email: user.emailStr,
                    token: token,
                    code: 200
                } as LoginUserResponse
            } catch (error) {
                return {
                    username: undefined,
                    email: undefined,
                    token: undefined,
                    code: 404
                } as LoginUserResponse
            }
        }
        else{
            return {
                username: undefined,
                email: undefined,
                token: undefined,
                code: 400
            } as LoginUserResponse
        }
    }
}