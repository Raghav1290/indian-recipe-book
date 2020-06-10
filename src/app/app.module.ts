import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRecipesComponent } from './login/admin-recipes/admin-recipes.component';
import { EditRecipesComponent } from './login/admin-recipes/edit-recipes/edit-recipes.component';

import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckOutComponent,
    RecipesComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    RecipeDetailComponent,
    AdminRecipesComponent,
    EditRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    NoopAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
