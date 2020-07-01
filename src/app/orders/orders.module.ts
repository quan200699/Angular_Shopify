import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListOrderComponent} from "./list-order/list-order.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {InfoOrderComponent} from "./info-order/info-order.component";



@NgModule({
  declarations: [
    InfoOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
