import { Component, Input, OnInit } from '@angular/core';
import { Recipe, recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {
    if (recipes.length > 0) {
      this.recipe = recipes[0];
    }
  }
}
