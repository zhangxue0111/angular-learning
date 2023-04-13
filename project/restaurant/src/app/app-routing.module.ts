import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo:'/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/new', component: RecipeEditComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent },
    { path: 'recipes/:id/edit', component: RecipeEditComponent },
    { path: 'shopping', component: ShoppingComponent }
  
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}