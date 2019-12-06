import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRemedioPageRoutingModule } from './add-remedio-routing.module';

import { AddRemedioPage } from './add-remedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRemedioPageRoutingModule
  ],
  declarations: [AddRemedioPage]
})
export class AddRemedioPageModule {}
