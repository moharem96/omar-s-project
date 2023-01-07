import { RecipeService } from './../recipe.services';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent  {
  @Input() recipeDetails: Recipe

  constructor(private recipeService: RecipeService){}



  toShoppingList() {
    this.recipeService.addIngToShopping(this.recipeDetails.ingredients)
  }
}
