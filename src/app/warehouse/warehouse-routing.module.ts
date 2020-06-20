import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListWarehouseComponent} from "./list-warehouse/list-warehouse.component";

const routes: Routes = [
  {
    path:'',
    component: ListWarehouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
