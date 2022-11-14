import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },

  {
    path: 'recipe2',
    loadChildren: () => import('./recipe2/recipe2.module').then( m => m.Recipe2PageModule)
  },

  {
    path: 'recipe3',
    loadChildren: () => import('./recipe3/recipe3.module').then( m => m.Recipe3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
