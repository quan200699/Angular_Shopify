import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseBillRoutingModule} from "./warehouse-bill-routing.module";
import {ListWarehouseBillComponent} from "./list-warehouse-bill/list-warehouse-bill.component";
import {CreateWarehouseBillComponent} from "./create-warehouse-bill/create-warehouse-bill.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditWarehouseBillComponent} from "./edit-warehouse-bill/edit-warehouse-bill.component";



@NgModule({
  declarations: [
    ListWarehouseBillComponent,
    CreateWarehouseBillComponent,
    EditWarehouseBillComponent,
  ],
  imports: [
    CommonModule,
    WarehouseBillRoutingModule,
    ReactiveFormsModule
  ]
})
export class WarehouseBillModule { }
