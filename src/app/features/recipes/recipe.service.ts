import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewRecipe, Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   {
  //     id: 1,
  //     name: 'A test recipe',
  //     description: 'A simple test recipe',
  //     imageURL:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
  //     ingredients: [
  //       { name: 'lemon', amount: 1 },
  //       { name: 'honey', amount: 2 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'great recipe',
  //     description: 'A description of the greatest recipe in the world!',
  //     imageURL:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7QUgLIlKoGmNlvoOQ-g-J0kTeV2efXgPVw&usqp=CAU',
  //     ingredients: [
  //       { name: 'egg', amount: 4 },
  //       { name: 'onion', amount: 3 },
  //     ],
  //   },
  // ];

  private recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  saveRecipes() {
    this.http
      .put(
        'https://delicious-app-1d909-default-rtdb.firebaseio.com/recipes.json',
        this.recipes
      )
      .subscribe((results) => console.log(results));
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://delicious-app-1d909-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((result) => {
          return result.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((result) => {
        this.recipes = result;
        this.recipeChanged.next(this.recipes);
      });
  }

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

  deleteRecipe(id: number) {
    const recipeIndex = this.recipes.findIndex((recipe) => recipe.id === id);
    this.recipes.splice(recipeIndex, 1);
    this.recipeChanged.next(this.recipes);
  }
}
