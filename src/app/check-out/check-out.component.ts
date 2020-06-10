import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { IngredientService } from '../shared/ingredient.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  ingredients: Ingredient[];
  total: number = 0;
  count: number = 0;
  amount: number;

  constructor(private ingredientService: IngredientService) { }
  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
    for(let ingredient of this.ingredients) {
      this.amount = ingredient.price;
      this.total = this.total + this.amount;
      this.count = this.count + 1;
    }
  }

}
