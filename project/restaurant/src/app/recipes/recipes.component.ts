import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  recipes: Recipe[];

  constructor(private recipeService : RecipeService, 
              private router : Router,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

  onEditRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route });
  }

}
