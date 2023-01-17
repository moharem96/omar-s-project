import { RecipeService } from './recipe.services';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const recipes = this.recipeService.getRecipe()

      if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
    }
  }

