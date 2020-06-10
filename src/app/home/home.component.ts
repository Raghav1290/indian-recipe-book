import { Component, OnInit } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedValue: string;
  selectedOption: Recipe[];
  selectedRecipe: string;
  recipes: Recipe[] = [];
  index: number;
  count: number = 0;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private dsService: DataStorageService) {
   }

  ngOnInit() {
    this.dsService.fetchRecipes();
  }

  onSelect(event: TypeaheadMatch): void {
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
    this.router.navigate(['recipes/' + this.index]);
  }

  onInputTouched() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes)
  }

}
