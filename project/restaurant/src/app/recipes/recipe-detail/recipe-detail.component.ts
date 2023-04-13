import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shopping/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private route : ActivatedRoute, 
              private location : Location,
              private recipeService : RecipeService,
              private router : Router) {}

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = + params['id'];
        this.recipe = this.recipeService.getRecipe(id);
      }
    );
    // const id = +this.route.snapshot.params['id'];
    // this.recipe = this.recipeService.getRecipe(id);
    // console.log("recipe = " + this.recipe);
    
  }

  goBack() {
    this.location.back();
  }

  save() {

  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addToShoppingList(ingredients);
  }

  goToEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route });
  }

}
