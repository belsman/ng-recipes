import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from '../../../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredentChangedSubscription: Subscription;

  onEdit(index: number) {
    this.shoppingListService.ingredientEdit.next(index);
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredentChangedSubscription =
      this.shoppingListService.ingredientsChanged.subscribe(
        (updatedIngredients: Ingredient[]) =>
          (this.ingredients = updatedIngredients)
      );
  }

  ngOnDestroy(): void {
    this.ingredentChangedSubscription.unsubscribe();
  }
}
