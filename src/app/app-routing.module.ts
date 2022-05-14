import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./features/recipes/recipes.module').then(
        (mod) => mod.RecipeModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./features/shopping/shopping.module').then(
        (mod) => mod.ShoppingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
