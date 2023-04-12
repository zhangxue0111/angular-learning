import { Component, OnInit } from '@angular/core';

import { INGREDIENTS } from './mock-ingredients';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListService : ShoppingListService) {}

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

}
