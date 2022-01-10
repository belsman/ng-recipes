import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes = recipes;
  constructor() {}

  ngOnInit(): void {}
}
