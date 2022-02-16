import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { RecipeService } from '../recipe.service';

import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  subscription: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['recipes', 'new']);
  }
}
