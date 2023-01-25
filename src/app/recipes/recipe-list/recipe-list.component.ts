import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './../recipe.services';
import { Recipe } from './../recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[]) => {
        this.recipes = recipe;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
