import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule)
    //TODO: AuthGuard
  },
  {
    path: 'error', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    redirectTo: '/list', 
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
