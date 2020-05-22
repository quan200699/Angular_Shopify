import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/products', product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(API_URL + `/products/${id}`)
  }
}
