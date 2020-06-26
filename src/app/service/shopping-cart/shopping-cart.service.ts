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

  getCartByUser(id: number): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(API_URL + `/carts/users/${id}`)
  }

  updateCart(id: number, shoppingCart: ShoppingCart): Observable<ShoppingCart> {
    return this.http.put<ShoppingCart>(API_URL + `/carts/${id}`, shoppingCart)
  }

  deleteShoppingCart(id: number): Observable<ShoppingCart> {
    return this.http.delete<ShoppingCart>(API_URL + `/carts/${id}`);
  }

  getAllItemByShoppingCart(id: number): Observable<Item[]> {
    return this.http.get<Item[]>(API_URL + `/carts/${id}/items`);
  }
}
