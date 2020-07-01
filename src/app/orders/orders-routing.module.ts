import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListOrderComponent} from "./list-order/list-order.component";


const routes: Routes = [
  {
    path: '',
    component: ListOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
