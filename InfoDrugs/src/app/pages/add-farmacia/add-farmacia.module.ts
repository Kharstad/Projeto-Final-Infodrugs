import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFarmaciaPageRoutingModule } from './add-farmacia-routing.module';

import { AddFarmaciaPage } from './add-farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFarmaciaPageRoutingModule
  ],
  declarations: [AddFarmaciaPage]
})
export class AddFarmaciaPageModule {}
