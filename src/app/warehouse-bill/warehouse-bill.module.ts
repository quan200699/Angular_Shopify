import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseBillRoutingModule} from "./warehouse-bill-routing.module";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditWarehouseBillComponent} from "./edit-warehouse-bill/edit-warehouse-bill.component";
import {InfoWarehouseBillComponent} from "./info-warehouse-bill/info-warehouse-bill.component";
import {CreateWarehouseBillDetailComponent} from "./create-warehouse-bill-detail/create-warehouse-bill-detail.component";



@NgModule({
  declarations: [
    ListWarehouseBillComponent,
    CreateWarehouseBillComponent,
    EditWarehouseBillComponent,
    InfoWarehouseBillComponent,
    CreateWarehouseBillDetailComponent,
  ],
  imports: [
    CommonModule,
    WarehouseBillRoutingModule,
    ReactiveFormsModule
  ]
})
export class WarehouseBillModule { }
