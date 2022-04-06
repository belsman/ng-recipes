import { Component } from '@angular/core';
import { RecipeService } from '../features/recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  constructor(private recipeService: RecipeService) {}

  onSaveRecipes() {
    this.recipeService.saveRecipes();
  }

  onFetchRecipes() {
    this.recipeService.fetchRecipes().subscribe();
  }
}
