import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseBillRoutingModule} from "./warehouse-bill-routing.module";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";



@NgModule({
  declarations: [
    ListWarehouseBillComponent,
  ],
  imports: [
    CommonModule,
    WarehouseBillRoutingModule
  ]
})
export class WarehouseBillModule { }
