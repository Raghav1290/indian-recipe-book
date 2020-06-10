import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminRecipesComponent } from './login/admin-recipes/admin-recipes.component';
import { EditRecipesComponent } from './login/admin-recipes/edit-recipes/edit-recipes.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'recipes', component: RecipesComponent },
  {path: 'recipes/:id', component: RecipeDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'admin', component: LoginComponent, children: [
    {path: 'admin-recipes', component: AdminRecipesComponent, children: [
      {path: 'new', component: EditRecipesComponent},
      {path: ':id', component: EditRecipesComponent}
    ]}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
