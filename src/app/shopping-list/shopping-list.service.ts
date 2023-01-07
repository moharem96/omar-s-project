import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getDataAdded() {
    return this.ingredients.slice()
  }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice())
  }

}
