import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WarehouseBill} from "../../model/warehouse-bill";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class WarehouseBillService {

  constructor(private http: HttpClient) {
  }

  getAllWarehouseBill(): Observable<WarehouseBill[]> {
    return this.http.get<WarehouseBill[]>(API_URL + '/warehousebills');
  }

  createWarehouseBill(warehouse: WarehouseBill): Observable<WarehouseBill> {
    return this.http.post<WarehouseBill>(API_URL + '/warehousebills', warehouse);
  }

  getWarehouseBill(id: number): Observable<WarehouseBill> {
    return this.http.get<WarehouseBill>(API_URL + `/warehousebills/${id}`)
  }

  updateWarehouseBill(id: number, warehouse: WarehouseBill): Observable<WarehouseBill> {
    return this.http.put<WarehouseBill>(API_URL + `/warehousebills/${id}`, warehouse)
  }

  deleteWarehouseBill(id: number): Observable<WarehouseBill> {
    return this.http.delete<WarehouseBill>(API_URL + `/warehousebills/${id}`);
  }
}
