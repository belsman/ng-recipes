import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe, recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes = recipes;
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  ngOnInit(): void {}
}
