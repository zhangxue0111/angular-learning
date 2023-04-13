import { Ingredient } from "../shopping/ingredient.model";

export interface Recipe {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    ingredients: Ingredient[];
}