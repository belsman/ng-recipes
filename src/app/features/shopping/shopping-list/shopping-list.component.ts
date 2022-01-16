import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-lis.service';

import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (updatedIngredients: Ingredient[]) =>
        (this.ingredients = updatedIngredients)
    );
  }
}
