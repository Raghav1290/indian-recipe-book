import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    recipes: Recipe[];
    id: number;
    recipeCategories = [];
    recipeDetailMode = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
      this.recipes = this.recipeService.getRecipes();
      for(let recipe of this.recipes) {
        console.log(recipe.category);
        this.recipeCategories.push(recipe.category);
      }
  }

}