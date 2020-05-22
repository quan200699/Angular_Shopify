import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./list-product/list-product.component";
import {AuthGuard} from "../helper/auth-guard";
import {CreateProductComponent} from "./create-product/create-product.component";
import {AdminAuthGuard} from "../helper/admin-auth-guard";
import {EditProductComponent} from "./edit-product/edit-product.component";


const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
