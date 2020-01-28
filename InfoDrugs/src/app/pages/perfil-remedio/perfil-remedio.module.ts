import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilRemedioPageRoutingModule } from './perfil-remedio-routing.module';

import { PerfilRemedioPage } from './perfil-remedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilRemedioPageRoutingModule
  ],
  declarations: [PerfilRemedioPage]
})
export class PerfilRemedioPageModule {}
