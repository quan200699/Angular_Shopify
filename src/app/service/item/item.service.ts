import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../model/item";

const API_URL = `${environment.apiUrl}`

declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
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

  addItemToShoppingCart(items: any, productId: number, shoppingCartId: number) {
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
