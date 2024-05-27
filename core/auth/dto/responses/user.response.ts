import { DeepReadonly } from 'ts-essentials'
import { User } from '../../domain/model/user.entity'

type UserResponse = DeepReadonly<{
    email: string
    id: string
    username: string
    password: string
}>

const UserResponse = {
    fromModel: (user: User): UserResponse => ({
        email: user.emailStr,
        id: user.id,
        username: user.username,
        password: user.password,
    }),
    with: (properties: UserResponse) => properties,
}

export { UserResponse}