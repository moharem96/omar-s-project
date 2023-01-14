import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {}
}
