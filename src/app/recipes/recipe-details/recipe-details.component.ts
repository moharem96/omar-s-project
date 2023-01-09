import { RecipeService } from './../recipe.services';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipeDetails: Recipe
id: number

  constructor(private recipeService: RecipeService, private shoppingList: ShoppingListService, private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.subscribe(
    (params: Params) => {
      this.id = +params['id']
      this.recipeDetails = this.recipeService.getRecipes(this.id)
    }
  )
}

  // toShoppingList() {
  //   this.recipeService.addIngToShopping(this.recipeDetails.ingredients)
  // }
  toShoppingList() {
    this.shoppingList.addIngToShopping(this.recipeDetails.ingredients)
  }
}
