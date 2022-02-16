import { Subject } from 'rxjs';
import { NewRecipe, Recipe } from './recipe.model';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'A test recipe',
      description: 'A simple test recipe',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
      ingredients: [
        { name: 'lemon', amount: 1 },
        { name: 'honey', amount: 2 },
      ],
    },
    {
      id: 2,
      name: 'great recipe',
      description: 'A description of the greatest recipe in the world!',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
      ingredients: [
        { name: 'egg', amount: 4 },
        { name: 'onion', amount: 3 },
      ],
    },
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(recipeId: number) {
    return this.recipes.find((recipe) => recipe.id === recipeId);
  }

  addRecipe(recipe: NewRecipe) {
    const newId = Math.floor(Math.random() * 1000);
    this.recipes.push({ ...recipe, id: newId });
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(id: number, updatedRecipe) {
    this.recipes = this.recipes.map((recipe) => {
      if (recipe.id === id) {
        return { ...recipe, ...updatedRecipe };
      } else {
        return recipe;
      }
    });

    this.recipeChanged.next(this.recipes);
  }
}
