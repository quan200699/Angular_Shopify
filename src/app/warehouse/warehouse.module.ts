import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseRoutingModule} from "./warehouse-routing.module";
import {ListWarehouseComponent} from "./list-warehouse/list-warehouse.component";
import {CreateWarehouseComponent} from "./create-warehouse/create-warehouse.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListWarehouseComponent,
    CreateWarehouseComponent,
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    ReactiveFormsModule
  ]
})
export class WarehouseModule { }
