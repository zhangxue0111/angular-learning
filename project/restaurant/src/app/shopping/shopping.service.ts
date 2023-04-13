import { Injectable } from '@angular/core';

import { Ingredient } from './ingredient.model';
import { INGREDIENTS } from './mock-ingredients';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredients = INGREDIENTS;

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredients : Ingredient[]) {
    this.ingredients.push(...ingredients);
  }




}
