import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "../../model/shopping-cart";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }

  getAllCart(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(API_URL + '/carts');
  }

  createCart(shoppingCart: ShoppingCart): Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(API_URL + '/carts', shoppingCart);
  }

  getCart(id: number): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(API_URL + `/carts/${id}`)
  }

  updateCart(id: number, shoppingCart: ShoppingCart): Observable<ShoppingCart> {
    return this.http.put<ShoppingCart>(API_URL + `/carts/${id}`, shoppingCart)
  }

  deleteShoppingCart(id: number): Observable<ShoppingCart> {
    return this.http.delete<ShoppingCart>(API_URL + `/carts/${id}`);
  }
}
