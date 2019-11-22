import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizarFarmaciaPageRoutingModule } from './localizar-farmacia-routing.module';

import { LocalizarFarmaciaPage } from './localizar-farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizarFarmaciaPageRoutingModule
  ],
  declarations: [LocalizarFarmaciaPage]
})
export class LocalizarFarmaciaPageModule {}
