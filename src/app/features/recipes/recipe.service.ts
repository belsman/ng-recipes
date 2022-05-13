import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { NewRecipe, Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  saveRecipes() {
    this.http
      .put(
        'https://delicious-app-1d909-default-rtdb.firebaseio.com/recipes.json',
        this.recipes
      )
      .subscribe((results) => console.log(results));
  }

  fetchRecipes() {
    return this.http
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
        }),
        tap((result) => this.setRecipes(result))
      );
  }

  private setRecipes(result: Recipe[]) {
    this.recipes = result;
    this.recipeChanged.next(this.recipes);
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
