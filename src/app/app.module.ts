import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './features/shopping/shopping-list/shopping-list.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './features/recipes/recipe-item/recipe-item.component';
import { RecipesComponent } from './features/recipes/recipes/recipes.component';
import { ShoppingEditComponent } from './features/shopping/shopping-edit/shopping-edit.component';

import { ShoppingListService } from './features/shopping/shopping-lis.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectRecipeComponent } from './features/recipes/select-recipe/select-recipe.component';
import { RecipeEditComponent } from './features/recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipesComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SelectRecipeComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
