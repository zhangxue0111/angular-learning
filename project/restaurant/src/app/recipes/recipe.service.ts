import { Injectable } from '@angular/core';

import { RECIPES } from './mock-recipes';
import { Ingredient } from '../shopping/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingService : ShoppingService) { }

  getRecipes() {
    return RECIPES;
  }

  getRecipe(id: number) {
    const recipe = RECIPES.find(r => r.id == id)!;
    return recipe;
  }

  updateRecipe(id: number) {
    
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredient(ingredients);
  }


}
