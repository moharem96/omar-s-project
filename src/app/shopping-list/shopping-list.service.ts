import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>()
  startEditing = new Subject<number>()

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getDataAdded() {
    return this.ingredients.slice()
  }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data)
    this.ingredientChanged.next(this.ingredients.slice())
  }

  getIngredient(index: number) {
    return this.ingredients[index]
  }

  // addIngredients(ingredients: Ingredient[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientChanged.emit(this.ingredients.slice())
  // }

  addIngToShopping(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())
 }

 updateIngredient(index: number, newIngredient: Ingredient) {
  this.ingredients[index] = newIngredient
  this.ingredientChanged.next(this.ingredients.slice())
 }

 deleteIngredient(index: number) {
  this.ingredients.splice(index, 1)
  this.ingredientChanged.next(this.ingredients.slice())
 }

}
