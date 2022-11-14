import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe2Page } from './recipe2.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe2PageRoutingModule {}
