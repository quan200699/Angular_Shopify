import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../model/item";
import {WarehouseBillDetailService} from "../warehouse-bill-detail/warehouse-bill-detail.service";
import {OrderDetailService} from "../order-detail/order-detail.service";

const API_URL = `${environment.apiUrl}`

declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient,
              private warehouseBillDetailService: WarehouseBillDetailService,
              private orderDetailService: OrderDetailService) {
  }

  getAllItem(): Observable<Item[]> {
    return this.http.get<Item[]>(API_URL + '/items');
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(API_URL + '/items', item);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(API_URL + `/items/${id}`)
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(API_URL + `/items/${id}`, item)
  }

  deleteItem(id: number): Observable<Item> {
    return this.http.delete<Item>(API_URL + `/items/${id}`);
  }

  async addItemToShoppingCart(items: any, productId: number, shoppingCartId: number) {
    let sumInput = await this.warehouseBillDetailService.sumAmount(productId).toPromise();
    let sumOutput = await this.orderDetailService.sumAmount(productId).toPromise();
    if (sumInput - sumOutput <= 0) {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type: 'error',
          title: 'Sản phẩm này hiện đã hết!\nHãy chon mua sản phẩm khác'
        });
      });
    } else {
      if (items.length == 0) {
        let item: Item = {
          product: {
            id: productId
          },
          quantity: 1,
          shoppingCart: {
            id: shoppingCartId
          }
        }
        this.createItem(item).subscribe(() => {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });

            Toast.fire({
              type: 'success',
              title: 'Đã thêm vào giỏ hàng'
            });
          });
        });
      } else {
        let index = -1;
        for (let i = 0; i < items.length; i++) {
          if (items[i].product.id == productId) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          let item1: Item = {
            product: {
              id: productId
            },
            quantity: 1,
            shoppingCart: {
              id: shoppingCartId
            }
          }
          this.createItem(item1).subscribe(() => {
            $(function () {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });

              Toast.fire({
                type: 'success',
                title: 'Đã thêm vào giỏ hàng'
              });
            });
          });
        } else {
          items[index].quantity += 1;
          this.updateItem(items[index].id, items[index]).subscribe(() => {
            $(function () {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: 'Đã thêm vào giỏ hàng'
              });
            });
          });
        }
      }
    }
  }

  decreaseItemToShoppingCart(items: any, productId: number) {
    let index = -1;
    for (let i = 0; i < items.length; i++) {
      if (items[i].product.id == productId) {
        index = i;
        break;
      }
    }
    if (index != -1) {
      if (items[index].quantity == 1) {
        this.deleteItem(items[index].id).subscribe(() => {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
            });
          });
        })
      } else {
        items[index].quantity -= 1;
        this.updateItem(items[index].id, items[index]).subscribe(() => {
          $(function () {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
            });
            Toast.fire({
              type: 'success',
              title: 'Đã giảm số lượng 1 sản phẩm trong giỏ hàng'
            });
          });
        });
      }
    }
  }
}
