import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";


const routes: Routes = [
  {
    path: '',
    component: ListWarehouseBillComponent
  },
  {
    path: 'create',
    component: CreateWarehouseBillComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseBillRoutingModule { }
