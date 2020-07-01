import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Orders} from "../../model/orders";
import {OrdersDetail} from "../../model/orders-detail";
import {Product} from "../../model/product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) {
  }

  getAllOrder(status?: boolean): Observable<Orders[]> {
    return this.http.get<Orders[]>(API_URL + '/orders?status=' + status);
  }

  createOrders(orders: Orders): Observable<Orders> {
    return this.http.post<Orders>(API_URL + '/orders', orders);
  }

  getOrders(id: number): Observable<Orders> {
    return this.http.get<Orders>(API_URL + `/orders/${id}`)
  }

  updateOrders(id: number, orders: Orders): Observable<Orders> {
    return this.http.put<Orders>(API_URL + `/orders/${id}`, orders)
  }

  deleteOrders(id: number): Observable<Orders> {
    return this.http.delete<Orders>(API_URL + `/orders/${id}`);
  }

  getAllOrderByUserAndStatus(id: number, status: boolean): Observable<Orders[]> {
    return this.http.get<Orders[]>(API_URL + `/orders/users/${id}?status=` + status);
  }

  getAllOrderDetail(id: number): Observable<OrdersDetail[]> {
    return this.http.get<OrdersDetail[]>(API_URL + `/orders/${id}/order-details`);
  }

  getAllProductUserBought(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + `/orders/users/${id}/products`);
  }
}
