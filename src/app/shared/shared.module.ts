import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropDown } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponeent } from './alert/alert.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AlertComponeent, LoadingSpinnerComponent, DropDown],

  imports: [CommonModule, FormsModule],

  exports: [
    AlertComponeent,
    LoadingSpinnerComponent,
    DropDown,
    CommonModule,
    FormsModule,
  ],
  entryComponents: [AlertComponeent],
})
export class SharedModule {}
