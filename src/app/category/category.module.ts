import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryRoutingModule} from "./category-routing.module";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CategoryListComponent,
    CreateCategoryComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
