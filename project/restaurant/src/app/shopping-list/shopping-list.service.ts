import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { INGREDIENTS } from './mock-ingredients';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  constructor() { }

  private ingredients : Ingredient[] = INGREDIENTS;


  getIngredients() {
    // return this.ingredients.slice();
    return this.ingredients;
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
  }



  
}
