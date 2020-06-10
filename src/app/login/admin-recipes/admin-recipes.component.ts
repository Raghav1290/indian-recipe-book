import { Component, OnInit } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-admin-recipes',
  templateUrl: './admin-recipes.component.html',
  styleUrls: ['./admin-recipes.component.css']
})
export class AdminRecipesComponent implements OnInit {

  adminRecipesMode = false;
  recipeNewEditMode = false;

  selectedValue: string;
  selectedOption: Recipe[];
  selectedRecipe: string;
  recipes: Recipe[] = [];
  index: number;
  count: number = 0;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private dsService: DataStorageService) {
   }

  ngOnInit() {
    this.adminRecipesMode = this.recipeService.adminRecipesMode;
    this.dsService.fetchRecipes();

  }

  onSelect(event: TypeaheadMatch): void {
    this.recipeNewEditMode = true;
    this.selectedOption = event.item;
    this.selectedRecipe = this.selectedOption["name"];
    for(let recipe of this.recipes) {
      if(this.selectedRecipe === recipe.name) {
        break;
      }
      this.count = this.count + 1;
    }
    this.index = this.count
    this.recipeService.getRecipe(this.index);
    this.router.navigate([this.index], {relativeTo: this.route});
  }
  onAddNewRecipe() {
    this.recipeNewEditMode = true;
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onInputTouched() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes)
  }
}
