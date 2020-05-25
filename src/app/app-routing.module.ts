import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutWithSharedComponent} from "./layout/layout-with-shared/layout-with-shared.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {HomepageComponent} from "./user/homepage/homepage.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {ShopComponent} from "./user/shop/shop.component";


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutWithSharedComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
      },
    ]
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'shop',
    component: ShopComponent
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
