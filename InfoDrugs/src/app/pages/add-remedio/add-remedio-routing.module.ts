import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRemedioPage } from './add-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: AddRemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRemedioPageRoutingModule {}
