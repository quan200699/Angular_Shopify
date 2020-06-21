import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseBillRoutingModule} from "./warehouse-bill-routing.module";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListWarehouseBillComponent,
    CreateWarehouseBillComponent,
  ],
  imports: [
    CommonModule,
    WarehouseBillRoutingModule,
    ReactiveFormsModule
  ]
})
export class WarehouseBillModule { }
