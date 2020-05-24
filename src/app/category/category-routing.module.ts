import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../helper/auth-guard";
import {CategoryListComponent} from "./category-list/category-list.component";
import {AdminAuthGuard} from "../helper/admin-auth-guard";
import {CreateCategoryComponent} from "./create-category/create-category.component";


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CategoryListComponent
  },
  {
    path: 'create',
    canActivate: [AdminAuthGuard],
    component: CreateCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
