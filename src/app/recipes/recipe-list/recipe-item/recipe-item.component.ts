import { Ingredient } from './../../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipeList : Recipe
  @Output() detailsList = new EventEmitter<Recipe>()
  onDetails() {
    this.detailsList.emit(this.recipeList)
  }
}
