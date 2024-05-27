import { DeepReadonly } from "ts-essentials"

type LoginUserResponse = DeepReadonly<{
    token: string | undefined
    username: string | undefined
    email: string | undefined
    code: number
}>

const LoginUserResponse = {
    with: (properties: LoginUserResponse) => properties
}

export {LoginUserResponse}