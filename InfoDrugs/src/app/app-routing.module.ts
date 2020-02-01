import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./pages/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'catalogo-preco',
    loadChildren: () => import('./pages/catalogo-preco/catalogo-preco.module').then( m => m.CatalogoPrecoPageModule)
  },
  {
    path: 'localizar-farmacia',
    loadChildren: () => import('./pages/localizar-farmacia/localizar-farmacia.module').then( m => m.LocalizarFarmaciaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'perfil-usuario/:id',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule)
  },
  {
    path: 'add-remedio',
    loadChildren: () => import('./pages/add-remedio/add-remedio.module').then( m => m.AddRemedioPageModule)
  },
  {
    path: 'perfil-remedio',
    loadChildren: () => import('./pages/perfil-remedio/perfil-remedio.module').then( m => m.PerfilRemedioPageModule)
  },
  {
    path: 'perfil-remedio/:id',
    loadChildren: () => import('./pages/perfil-remedio/perfil-remedio.module').then( m => m.PerfilRemedioPageModule)
  },
  {
    path: 'duvidas',
    loadChildren: () => import('./pages/duvidas/duvidas.module').then( m => m.DuvidasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
