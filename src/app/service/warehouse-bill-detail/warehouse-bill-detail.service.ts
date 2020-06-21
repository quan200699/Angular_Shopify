import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WarehouseBillDetail} from "../../model/warehouse-bill-detail";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class WarehouseBillDetailService {
  constructor(private http: HttpClient) {
  }

  getAllWarehouseBillDetail(): Observable<WarehouseBillDetail[]> {
    return this.http.get<WarehouseBillDetail[]>(API_URL + '/warehouse-bill-details');
  }

  createWarehouseBillDetail(warehouseBillDetail: WarehouseBillDetail): Observable<WarehouseBillDetail> {
    return this.http.post<WarehouseBillDetail>(API_URL + '/warehouse-bill-details', warehouseBillDetail);
  }

  getWarehouseBillDetail(id: number): Observable<WarehouseBillDetail> {
    return this.http.get<WarehouseBillDetail>(API_URL + `/warehouse-bill-details/${id}`)
  }

  updateWarehouseBillDetail(id: number, warehouseBillDetail: WarehouseBillDetail): Observable<WarehouseBillDetail> {
    return this.http.put<WarehouseBillDetail>(API_URL + `/warehouse-bill-details/${id}`, warehouseBillDetail)
  }

  deleteWarehouseBillDetail(id: number): Observable<WarehouseBillDetail> {
    return this.http.delete<WarehouseBillDetail>(API_URL + `/warehouse-bill-details/${id}`);
  }
}
