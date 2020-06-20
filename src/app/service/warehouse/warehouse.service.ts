import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Warehouse} from "../../model/warehouse";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) {
  }

  getAllWarehouse(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(API_URL + '/warehouses');
  }

  createWarehouse(warehouse: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(API_URL + '/warehouses', warehouse);
  }

  getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(API_URL + `/warehouses/${id}`)
  }

  updateWarehouse(id: number, warehouse: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(API_URL + `/warehouses/${id}`, warehouse)
  }

  deleteWarehouse(id: number): Observable<Warehouse> {
    return this.http.delete<Warehouse>(API_URL + `/warehouses/${id}`);
  }
}
