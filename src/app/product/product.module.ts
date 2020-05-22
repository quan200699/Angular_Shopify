import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from "./product-routing.module";
import {ListProductComponent} from "./list-product/list-product.component";



@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
