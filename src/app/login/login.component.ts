import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminRecipeMode = false;
  error: string = null;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
   }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    console.log(loginForm)
    this.loginService.signIn(email, password).subscribe(userData => {
      console.log(userData);
      alert("You are logged in");
      this.router.navigate(['admin-recipes'], {relativeTo: this.route})
    }, errorRes => {
      console.log(errorRes);
      switch(errorRes.error.error.message) {
        case "EMAIL_NOT_FOUND":
          this.error = "This email is not Found!";
          break;
        case "INVALID_PASSWORD":
          this.error = "Please enter a correct Password!";
          break;
      }
    })
    console.log(loginForm.value)
  }


}