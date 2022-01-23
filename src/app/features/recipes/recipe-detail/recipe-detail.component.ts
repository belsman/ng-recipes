import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping/shopping-lis.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList() {
    const { ingredients } = this.recipe;
    this.shoppingListService.addIngredient(ingredients);
  }

  ngOnInit(): void {}
}
