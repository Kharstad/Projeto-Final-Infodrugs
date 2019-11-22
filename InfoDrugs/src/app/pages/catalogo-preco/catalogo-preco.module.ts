import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPrecoPageRoutingModule } from './catalogo-preco-routing.module';

import { CatalogoPrecoPage } from './catalogo-preco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPrecoPageRoutingModule
  ],
  declarations: [CatalogoPrecoPage]
})
export class CatalogoPrecoPageModule {}
