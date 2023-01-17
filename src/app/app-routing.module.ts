import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ChooseRecipeComponent } from './recipes/choose-recipe/choose-recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: ChooseRecipeComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailsComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
