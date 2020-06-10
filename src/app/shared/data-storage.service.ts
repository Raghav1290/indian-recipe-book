import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private recipeService: RecipeService, private http: HttpClient, private loginService: LoginService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    console.log("message from strore data service")
    console.log(recipes);
    this.http.put('https://indianrecipebook-b44b4.firebaseio.com/recipes.json', recipes).subscribe(data => {
      console.log(data);
    });
  }

  
  fetchRecipes() {
    this.http.get<Recipe[]>('https://indianrecipebook-b44b4.firebaseio.com/recipes.json').subscribe(recipes => {
      this.recipeService.setRecipes(recipes)
    })
  }
}
