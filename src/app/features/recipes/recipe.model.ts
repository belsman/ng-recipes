import { Ingredient } from 'src/app/shared/ingredient.model';

export interface Recipe {
  name: string;
  description: string;
  imageURL: string;
  ingredients: Ingredient[];
}
