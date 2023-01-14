import { Subscription } from 'rxjs';
import { OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm
  subscription: Subscription
  editMode = false
  editItemIndex: number
  editedItem: Ingredient
  constructor(private shoppingList: ShoppingListService){}

  ngOnInit(): void {
      this.subscription = this.shoppingList.startEditing.subscribe(
        (index: number) => {
          this.editItemIndex = index
          this.editMode = true
          this.editedItem = this.shoppingList.getIngredient(index)
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          }
          )
        }
      )
  }

  onSubmitItem(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)
    if(this.editMode) {
      this.shoppingList.updateIngredient(this.editItemIndex, newIngredient)
    }else {
      this.shoppingList.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }

  onclear() {
    this.editMode = false
    this.slForm.reset()
  }

  onDelete() {
    this.onclear()
    this.shoppingList.deleteIngredient(this.editItemIndex)
  }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
