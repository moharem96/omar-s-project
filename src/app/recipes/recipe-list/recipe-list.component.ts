import { EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 recipes: Recipe[]= [
  new Recipe('first item', 'this is description', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=600,545'),

  new Recipe('second item', 'this is second description', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=600,545'),

 ]

  @Output() choicedDetails =  new EventEmitter<Recipe>()
  onList(objList: Recipe) {
    this.choicedDetails.emit(objList)
  }
}
