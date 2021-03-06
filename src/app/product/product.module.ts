import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from "./product-routing.module";
import {ListProductComponent} from "./list-product/list-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {InfoProductComponent} from "./info-product/info-product.component";



@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
    InfoProductComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
