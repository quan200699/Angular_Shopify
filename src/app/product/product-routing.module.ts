import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./list-product/list-product.component";
import {AuthGuard} from "../helper/auth-guard";


const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
