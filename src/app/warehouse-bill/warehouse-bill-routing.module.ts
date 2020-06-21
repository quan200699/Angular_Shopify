import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";
import {EditWarehouseBillComponent} from "./edit-warehouse-bill/edit-warehouse-bill.component";
import {AdminAuthGuard} from "../helper/admin-auth-guard";
import {InfoWarehouseBillComponent} from "./info-warehouse-bill/info-warehouse-bill.component";
import {CreateWarehouseBillDetailComponent} from "./create-warehouse-bill-detail/create-warehouse-bill-detail.component";


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
  },
  {
    path: 'info/:id',
    component: InfoWarehouseBillComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'info/:id/create',
    component: CreateWarehouseBillDetailComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseBillRoutingModule { }
