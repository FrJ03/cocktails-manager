import { LoginUserUseCase } from "../../auth/application/login-user.use-case"
import { UsersMongo } from "../../auth/infrastructure/services/users-mongo.repository"

const Container = {
    init: () => {
        const users = new UsersMongo()
        return {
            loginUser: new LoginUserUseCase(users)
        }
    }
}

export const container = Container.init()