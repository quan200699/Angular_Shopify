import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryRoutingModule} from "./category-routing.module";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {InfoCategoryComponent} from "./info-category/info-category.component";



@NgModule({
  declarations: [
    ListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    InfoCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
