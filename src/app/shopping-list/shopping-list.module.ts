import { AuthGuard } from './../auth/auth.guard';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent, canActivate: [AuthGuard] },
    ]),
    SharedModule,
  ],
})
export class ShoppingListModule {}
