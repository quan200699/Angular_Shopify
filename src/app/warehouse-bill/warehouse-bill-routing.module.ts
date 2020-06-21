import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";
import {EditWarehouseBillComponent} from "./edit-warehouse-bill/edit-warehouse-bill.component";
import {AdminAuthGuard} from "../helper/admin-auth-guard";


const routes: Routes = [
  {
    path: '',
    component: ListWarehouseBillComponent
  },
  {
    path: 'create',
    component: CreateWarehouseBillComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditWarehouseBillComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseBillRoutingModule { }
