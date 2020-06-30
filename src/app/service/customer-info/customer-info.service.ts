import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerInfo} from "../../model/customer-info";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  constructor(private http: HttpClient) {
  }

  getAllCustomerInfo(): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(API_URL + '/customer-infos');
  }

  createCustomerInfo(customerInfo: CustomerInfo): Observable<CustomerInfo> {
    return this.http.post<CustomerInfo>(API_URL + '/customer-infos', customerInfo);
  }

  updateCustomerInfo(id: number, customerInfo: CustomerInfo): Observable<CustomerInfo> {
    return this.http.put<CustomerInfo>(API_URL + `/customer-infos/${id}`, customerInfo)
  }

  deleteCustomerInfo(id: number): Observable<CustomerInfo> {
    return this.http.delete<CustomerInfo>(API_URL + `/customer-infos/${id}`)
  }

  getCustomerInfo(id: number): Observable<CustomerInfo> {
    return this.http.get<CustomerInfo>(API_URL + `/customer-infos/${id}`)
  }
}
