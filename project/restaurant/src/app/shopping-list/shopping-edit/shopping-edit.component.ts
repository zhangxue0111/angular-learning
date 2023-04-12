import { Component, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild("inputName") inputName : ElementRef; 
  @ViewChild("inputAmount") inputAmount: ElementRef;

  onAddItem() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    const newIngredient = {
      name: name,
      amount: amount
    }
    this.shoppingListService.addIngredient(newIngredient);
  }

}
