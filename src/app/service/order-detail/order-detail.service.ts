import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDetail} from "../../model/order-detail";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(private http: HttpClient) {
  }

  getAllOrderDetail(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(API_URL + '/order-details');
  }

  createOrderDetail(orderDetail: OrderDetail): Observable<OrderDetail> {
    return this.http.post<OrderDetail>(API_URL + '/order-details', orderDetail);
  }

  getOrderDetail(id: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(API_URL + `/order-details/${id}`)
  }

  updateOrderDetail(id: number, orderDetail: OrderDetail): Observable<OrderDetail> {
    return this.http.put<OrderDetail>(API_URL + `/order-details/${id}`, orderDetail)
  }

  deleteOrderDetail(id: number): Observable<OrderDetail> {
    return this.http.delete<OrderDetail>(API_URL + `/order-details/${id}`);
  }

  sumAmount(id: number): Observable<number> {
    return this.http.get<number>(API_URL + `/order-details/${id}/sum`)
  }
}
