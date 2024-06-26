import Recipe from "../model/recipe.entity";

export interface Recipes{
    getAll(cocktailId: string): Promise<Array<Recipe>>
}