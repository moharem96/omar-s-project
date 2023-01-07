import { OnInit } from '@angular/core';
import { RecipeService } from './../recipe.services';
import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[];

 constructor(private recipeService: RecipeService){}

 ngOnInit(): void {
     this.recipes = this.recipeService.getRecipe()
 }


}
