import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from "@angular/core"
import { Recipe } from "./recipe.model"

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[]= [
  new Recipe('first item',
   'this is description',
    'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=600,545',
  [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),

  new Recipe('second item', 'this is second description',
   'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=600,545',
   [new Ingredient('Buns', 2), new Ingredient('Meat', 2)]),
 ]

constructor(private shoopingList: ShoppingListService){}


getRecipe() {
  return this.recipes.slice()
}
getRecipes(index: number) {
  return this.recipes[index]
}

//  addIngToShopping(ingredients: Ingredient[]){
//   this.shoopingList.addIngredients(ingredients)
//  }

}
