import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutWithSharedComponent} from "./layout/layout-with-shared/layout-with-shared.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutWithSharedComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
