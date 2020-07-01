import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListOrderComponent} from "./list-order/list-order.component";
import {InfoOrderComponent} from "./info-order/info-order.component";


const routes: Routes = [
  {
    path: '',
    component: ListOrderComponent
  },
  {
    path: 'info/:id',
    component: InfoOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
