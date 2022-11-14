import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe3PageRoutingModule } from './recipe3-routing.module';

import { Recipe3Page } from './recipe3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe3PageRoutingModule
  ],
  declarations: [Recipe3Page]
})
export class Recipe3PageModule {}
