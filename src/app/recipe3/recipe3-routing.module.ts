import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe3Page } from './recipe3.page';

const routes: Routes = [
  {
    path: '',
    component: Recipe3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Recipe3PageRoutingModule {}
