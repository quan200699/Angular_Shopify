import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutWithSharedComponent} from "./layout/layout-with-shared/layout-with-shared.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutWithSharedComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
