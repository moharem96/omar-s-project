import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private shoppingList: ShoppingListService){}

  @ViewChild('nameInput', {static: true}) nameEl: ElementRef
  @ViewChild('amountInput', {static: true}) amountEl: ElementRef
  onAdded() {
    const newIngredient = new Ingredient(this.nameEl.nativeElement.value, this.amountEl.nativeElement.value)

    this.shoppingList.addIngredient(newIngredient)
  }
}
