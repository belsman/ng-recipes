import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    {
      name: 'A test recipe',
      description: 'A simple test recipe',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
    },
    {
      name: 'great recipe',
      description: 'A description of the greatest recipe in the world!',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
    },
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
