import { Subject } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<number>();

  private ingredients: Ingredient[] = [
    { name: 'apples', amount: 5 },
    { name: 'tomotoes', amount: 10 },
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredientById(id: number) {
    // Technically this is the index in the list, not the id
    return this.ingredients[id];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient | Ingredient[]) {
    if (Array.isArray(ingredient)) {
      this.ingredients.push(...ingredient);
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    const ingredientIndex = this.ingredients.findIndex((item) => {
      return item.name === ingredient.name && item.amount === ingredient.amount;
    });

    console.log('ingredentIndex is, ', ingredientIndex);
    console.log('ingredent is, ', ingredient);

    const newIngredientList = this.ingredients.slice();
    newIngredientList.splice(ingredientIndex, 1);

    this.ingredientsChanged.next(newIngredientList);
  }
}
