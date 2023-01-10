import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]= [];
  private igChangeSub: Subscription

  constructor(private shoppingList: ShoppingListService){}

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getDataAdded()
     this.igChangeSub =  this.shoppingList.ingredientChanged.subscribe(
      (ingredient: Ingredient[]) => this.ingredients = ingredient
      )
  }
  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe()

  }
}
