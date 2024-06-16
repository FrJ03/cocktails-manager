import { NotFoundError } from "../../../commons/domain/errors/not-found-error";
import { Cocktail } from "../../domain/model/cocktail.entity";
import { Cocktails } from "../../domain/services/cocktails.repository";
import { CocktailDataMapper } from "../persistence/cocktail.data-mapper";
import { CocktailMongoPublisher } from "../persistence/cocktail.publisher";

export class CocktailsMongo implements Cocktails{
    async getAll(): Promise<Array<Cocktail>>{
        try{
            const cocktails = await CocktailMongoPublisher.find({}).lean()
            const cocktailsArray: Array<Cocktail> = []
            cocktails.forEach(cocktail => cocktailsArray.push(CocktailDataMapper.toModel(cocktail)))
            return cocktailsArray
        }
        catch{
            throw new NotFoundError('cocktails_database_error')
        }
    }
    async save(cocktail: Cocktail): Promise<Boolean>{
        const cocktailResponse = await CocktailMongoPublisher.findOne({name: cocktail.name}).lean()
        if(cocktailResponse == null){
            const cocktailData = new CocktailMongoPublisher({
                name: cocktail.name,
                image: cocktail.image
            })

            await cocktailData.save()
            
            return true
        }
        else{
            return false
        }
    }
}