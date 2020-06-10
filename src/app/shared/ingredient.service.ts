import { Injectable } from '@angular/core';
import { Ingredient } from './ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingredients: Ingredient[] = []
  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
