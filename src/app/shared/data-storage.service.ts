import { RecipeService } from './../recipes/recipe.services';
import { Recipe } from './../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipe = this.recipeService.getRecipe();
    this.http.put('https://ng-course-recipebook-18a00-default-rtdb.firebaseio.com/recipes.json', recipe).subscribe(data => console.log(data))
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://ng-course-recipebook-18a00-default-rtdb.firebaseio.com/recipes.json')
    .pipe(map (recipes => {
      return recipes.map(recipes => {
        return {...recipes, ingredients: recipes.ingredients? recipes.ingredients : []}
      })
    }), tap(recipes => {
      this.recipeService.setRecipe(recipes)

    } ))

  }
}
