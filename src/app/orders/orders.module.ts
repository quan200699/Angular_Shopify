import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListOrderComponent} from "./list-order/list-order.component";
import {OrdersRoutingModule} from "./orders-routing.module";



@NgModule({
  declarations: [
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
