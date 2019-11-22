import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFarmaciaPage } from './add-farmacia.page';

const routes: Routes = [
  {
    path: '',
    component: AddFarmaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFarmaciaPageRoutingModule {}
