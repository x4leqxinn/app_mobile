import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// Importamos ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    //Importamos 
    ReactiveFormsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
