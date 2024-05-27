import { DeepReadonly } from "ts-essentials";

type LoginUserRequest = DeepReadonly<{
    email: string
    password: string
}>

const LoginUserRequest = {
    with: (properties: LoginUserRequest): LoginUserRequest => properties
}

export {LoginUserRequest}