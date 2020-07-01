import {Component, OnInit} from '@angular/core';
import {Orders} from "../../model/orders";
import {OrdersService} from "../../service/order/orders.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {
  listOrder: Orders[] = [];
  id: number;

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.getAllOrders();
  }

  getOrderId(id: number) {
    this.id = id;
  }

  getOrder(id: number) {
    return this.ordersService.getOrders(id).toPromise();
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrders(id).subscribe(() => {
      this.ordersService.getAllOrder(false).subscribe(listOrder => {
        this.listOrder = listOrder;
      })
      $(function () {
        $('#modal-delete').modal('hide');
      })
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Hủy đơn hàng thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Hủy đơn hàng thất bại'
        });
      });
    })
  }

  async confirmOrder(id: number) {
    let orders = await this.getOrder(id);
    orders.status = true;
      this.ordersService.updateOrders(id, orders).subscribe(() => {
        this.ordersService.getAllOrder(false).subscribe(listOrder => {
          this.listOrder = listOrder;
        })
        $(function () {
          $('#modal-confirm').modal('hide');
        })
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Đơn hàng đã được xác nhận'
          });
        });
      }, () => {
        $(function () {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'error',
            title: 'Xác nhận đơn hàng thất bại'
          });
        });
      })
  }

  getAllOrders() {
    this.ordersService.getAllOrder(false).subscribe(listOrder => {
      this.listOrder = listOrder;
      $(function () {
        $('#table-orders').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    })
  }
}
