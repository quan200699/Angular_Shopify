import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdersDetail} from "../../model/orders-detail";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) {
  }

  getAllOrderDetail(): Observable<OrdersDetail[]> {
    return this.http.get<OrdersDetail[]>(API_URL + '/order-details');
  }

  createOrderDetail(orderDetail: OrdersDetail): Observable<OrdersDetail> {
    return this.http.post<OrdersDetail>(API_URL + '/order-details', orderDetail);
  }

  getOrderDetail(id: number): Observable<OrdersDetail> {
    return this.http.get<OrdersDetail>(API_URL + `/order-details/${id}`)
  }

  updateOrderDetail(id: number, orderDetail: OrdersDetail): Observable<OrdersDetail> {
    return this.http.put<OrdersDetail>(API_URL + `/order-details/${id}`, orderDetail)
  }

  deleteOrderDetail(id: number): Observable<OrdersDetail> {
    return this.http.delete<OrdersDetail>(API_URL + `/order-details/${id}`);
  }

  sumAmount(id: number): Observable<number> {
    return this.http.get<number>(API_URL + `/order-details/${id}/sum`)
  }
}
