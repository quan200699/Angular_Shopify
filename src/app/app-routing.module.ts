import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutWithSharedComponent} from "./layout/layout-with-shared/layout-with-shared.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {HomepageComponent} from "./user/homepage/homepage.component";
import {AdminAuthGuard} from "./helper/admin-auth-guard";
import {ShopComponent} from "./user/shop/shop.component";
import {ContactComponent} from "./user/contact/contact.component";
import {ProductDetailComponent} from "./user/product-detail/product-detail.component";
import {ShoppingCartComponent} from "./user/shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./user/checkout/checkout.component";
import {CategoryDetailComponent} from "./user/category-detail/category-detail.component";
import {FavoriteComponent} from "./user/favorite/favorite.component";
import {UserOrderComponent} from "./user/user-order/user-order.component";
import {AdminComponent} from "./admin/admin.component";


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutWithSharedComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path:'',
        component: AdminComponent
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
      },
      {
        path: 'warehouse',
        loadChildren: () => import('./warehouse/warehouse.module').then(module => module.WarehouseModule)
      },
      {
        path: 'warehouse-bill',
        loadChildren: () => import('./warehouse-bill/warehouse-bill.module').then(module => module.WarehouseBillModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule)
      }
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
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'category/:id',
    component: CategoryDetailComponent
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
    path: 'order',
    component: UserOrderComponent
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
