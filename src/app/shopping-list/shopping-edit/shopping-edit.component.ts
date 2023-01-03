import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Component, ElementRef, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() nameAndAmount = new EventEmitter<Ingredient>()
  @ViewChild('nameInput', {static: true}) nameEl: ElementRef
  @ViewChild('amountInput', {static: true}) amountEl: ElementRef
  onAdded() {
    this.nameAndAmount.emit({name: this.nameEl.nativeElement.value, amount: this.amountEl.nativeElement.value})
  }
}
