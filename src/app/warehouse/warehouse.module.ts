import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseRoutingModule} from "./warehouse-routing.module";
import {ListWarehouseComponent} from "./list-warehouse/list-warehouse.component";



@NgModule({
  declarations: [
    ListWarehouseComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
