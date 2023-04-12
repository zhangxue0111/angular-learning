import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes: Recipe[] = RECIPES;

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }



}
