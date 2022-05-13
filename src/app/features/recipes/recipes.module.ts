import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesComponent,
    SelectRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule,
  ],
  exports: [],
})
export class RecipeModule {}
