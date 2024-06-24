import { LoginUserUseCase } from "../../auth/application/login-user.use-case"
import { UsersMongo } from "../../auth/infrastructure/services/users-mongo.repository"
import { CreateCocktailUseCase } from "../../cocktail/application/create-cocktail.use-case"
import { DeleteCocktailUseCase } from "../../cocktail/application/delete-cocktail.use-case"
import { GetCocktailsUseCase } from "../../cocktail/application/get-cocktails.use-case"
import { CocktailsMongo } from "../../cocktail/infrastructure/services/cocktails-mongo.repository"

const Container = {
    init: () => {
        const users = new UsersMongo()
        const cocktails = new CocktailsMongo

        return {
            loginUser: new LoginUserUseCase(users),
            getCocktails: new GetCocktailsUseCase(cocktails),
            createCocktail: new CreateCocktailUseCase(cocktails),
            deleteCocktail: new DeleteCocktailUseCase(cocktails)
        }
    }
}

export const container = Container.init()