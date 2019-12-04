import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilRemedioPage } from './perfil-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilRemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilRemedioPageRoutingModule {}
