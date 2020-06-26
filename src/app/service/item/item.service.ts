import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "../../model/shopping-cart";
import {Item} from "../../model/item";

const API_URL = `${environment.apiUrl}`

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
}
