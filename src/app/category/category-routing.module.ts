import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../helper/auth-guard";
import {CategoryListComponent} from "./category-list/category-list.component";


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: CategoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
