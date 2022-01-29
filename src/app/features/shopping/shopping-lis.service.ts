import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    { name: 'apples', amount: 5 },
    { name: 'tomotoes', amount: 10 },
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (Array.isArray(ingredient)) {
      this.ingredients.push(...ingredient);
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
