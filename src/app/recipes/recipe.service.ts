import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientService } from '../shared/ingredient.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  adminRecipesMode = true;
  recipeEditMode = true;

  private recipes: Recipe[] = []


  constructor(private ingredientService: IngredientService) {
   }
  

  getRecipes() {
    return this.recipes;
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    console.log(this.recipes);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  addIngredientsToCheckOut(ingredients: Ingredient[]) {
    this.ingredientService.addIngredients(ingredients);
  }
}
