import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizarFarmaciaPage } from './localizar-farmacia.page';

const routes: Routes = [
  {
    path: '',
    component: LocalizarFarmaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalizarFarmaciaPageRoutingModule {}
