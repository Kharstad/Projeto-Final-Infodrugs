import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoPrecoPage } from './catalogo-preco.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPrecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPrecoPageRoutingModule {}
