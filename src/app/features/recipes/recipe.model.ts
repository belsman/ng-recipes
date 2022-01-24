import { Ingredient } from 'src/app/shared/ingredient.model';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  ingredients: Ingredient[];
}
