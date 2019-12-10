import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilFarmaciaPageRoutingModule } from './perfil-farmacia-routing.module';

import { PerfilFarmaciaPage } from './perfil-farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilFarmaciaPageRoutingModule
  ],
  declarations: [PerfilFarmaciaPage]
})
export class PerfilFarmaciaPageModule {}
