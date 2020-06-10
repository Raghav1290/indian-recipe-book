import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Recipe } from 'src/app/recipes/recipe.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.css']
})
export class EditRecipesComponent implements OnInit {

  id: number;
  editMode = false;
  recipeEditForm: FormGroup;
  recipeData: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.editForm();
    })
  }

  private editForm() {
    let recipeName = '';
    let recipeChef = '';
    let recipeCategory = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeMethod = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeChef = recipe.chef;
      recipeCategory = recipe.category;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      recipeMethod = recipe.method;
      if(recipe['ingredients']) {
        for(let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount),
            'price': new FormControl(ingredient.price)
          }))
        }
      }
    }
    this.recipeEditForm = new FormGroup({
      'recipeName': new FormControl(recipeName),
      'recipeChef': new FormControl(recipeChef),
      'recipeCategory': new FormControl(recipeCategory),
      'recipeImagePath': new FormControl(recipeImagePath),
      'recipeDescription': new FormControl(recipeDescription),
      'recipeMethod': new FormControl(recipeMethod),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    this.recipeData = this.recipeEditForm.value;
    const newRecipe = new Recipe(this.recipeEditForm.value['recipeName'], this.recipeEditForm.value['recipeCategory'], this.recipeEditForm.value['recipeChef'], this.recipeEditForm.value['recipeDescription'], this.recipeEditForm.value['recipeMethod'], this.recipeEditForm.value['recipeImagePath'], this.recipeEditForm.value['ingredients'])
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      console.log(newRecipe);
    }
    else {
      // if(this.recipeEditForm.value['recipeName'] === '' || this.recipeEditForm.value['recipeCategory'] === '' || this.recipeEditForm.value['recipeChef'] === '' || this.recipeEditForm.value['recipeDescription'] === '' || this.recipeEditForm.value['recipeMethod'] === '' || this.recipeEditForm.value['recipeImagePath'] === '') {
      //   console.log("No Proper Data");
      // }
        console.log(newRecipe)
        this.recipeService.addRecipe(newRecipe);
        console.log("Recipes gone to store")

    }
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  onAddIngredients() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl(),
      'price': new FormControl
    }))
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.onCancelRecipe()
  }

  onCancelRecipe() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  onDeleteIngredients(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }
}
