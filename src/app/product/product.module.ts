import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from "./product-routing.module";
import {ListProductComponent} from "./list-product/list-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
