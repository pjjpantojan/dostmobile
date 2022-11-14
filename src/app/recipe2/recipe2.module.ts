import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Recipe2PageRoutingModule } from './recipe2-routing.module';

import { Recipe2Page } from './recipe2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Recipe2PageRoutingModule
  ],
  declarations: [Recipe2Page]
})
export class Recipe2PageModule {}
