import {Component, OnInit} from '@angular/core';
import {OrdersDetail} from "../../model/orders-detail";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {OrdersService} from "../../service/order/orders.service";
import {Orders} from "../../model/orders";

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss']
})
export class InfoOrderComponent implements OnInit {
  listOrderDetail: OrdersDetail[] = [];
  sub: Subscription;
  id: number;
  currentOrder: Orders;

  constructor(private activatedRoute: ActivatedRoute,
              private ordersService: OrdersService) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentOrder = await this.getCurrentOrder(this.id);
      this.getAllOrderDetailByOrder(this.currentOrder);
    })
  }

  ngOnInit() {
  }

  getCurrentOrder(id: number) {
    return this.ordersService.getOrders(id).toPromise();
  }

  getAllOrderDetailByOrder(orders: Orders) {
    this.ordersService.getAllOrderDetail(orders.id).subscribe(listOrderDetail => {
      this.listOrderDetail = listOrderDetail;
    })
  }
}
