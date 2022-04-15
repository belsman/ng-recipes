import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-lis.service';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('f') f: NgForm;

  editSubscription: Subscription;
  isEditMode = false;
  ingredientIndex: number;

  onAdd(form: NgForm) {
    const { name, amount } = form.value;
    if (this.isEditMode) {
      this.shoppingListService.updateIngredient(this.ingredientIndex, {
        name,
        amount,
      });
    } else {
      this.shoppingListService.addIngredient({ name, amount });
    }
    this.isEditMode = false;
    form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredientIndex);
    this.isEditMode = false;
    this.f.reset();
  }

  onClear() {
    this.f.reset();
    this.isEditMode = false;
  }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.ingredientEdit.subscribe(
      (number) => {
        this.ingredientIndex = number;
        const indegredientToEdit =
          this.shoppingListService.getIngredientById(number);
        this.f.setValue(indegredientToEdit);
        this.isEditMode = true;
      }
    );
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
