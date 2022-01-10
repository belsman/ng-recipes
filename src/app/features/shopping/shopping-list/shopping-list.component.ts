import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    { name: 'apples', amount: 5 },
    { name: 'tomotoes', amount: 10 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
