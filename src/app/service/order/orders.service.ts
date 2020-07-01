import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Orders} from "../../model/orders";

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

  sumAmount(id: number): Observable<number> {
    return this.http.get<number>(API_URL + `/orders/${id}/sum`)
  }

  getAllOrderByUser(id: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(API_URL + `/orders/users/${id}`);
  }
}
