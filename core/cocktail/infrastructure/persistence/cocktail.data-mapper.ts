import { FlattenMaps, ObjectId } from 'mongoose';
import { Cocktail } from '../../domain/model/cocktail.entity';
import { CocktailType } from './cocktail.type';

const CocktailDataMapper = {
    toModel: (cocktail: FlattenMaps<CocktailType>): Cocktail => 
        new Cocktail(
            cocktail._id.toString(),
            cocktail.name,
            cocktail.image
        )
} as const

export { CocktailDataMapper }