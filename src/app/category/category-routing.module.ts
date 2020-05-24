import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../helper/auth-guard";
import {ListCategoryComponent} from "./list-category/list-category.component";
import {AdminAuthGuard} from "../helper/admin-auth-guard";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ListCategoryComponent
  },
  {
    path: 'create',
    canActivate: [AdminAuthGuard],
    component: CreateCategoryComponent
  },
  {
    path: 'edit/:id',
    canActivate: [AdminAuthGuard],
    component: EditCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
