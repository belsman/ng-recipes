import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-lis.service';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAdd(form: NgForm) {
    const { name, amount } = form.value;
    this.shoppingListService.addIngredient({ name, amount });
  }
}
