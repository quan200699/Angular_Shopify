import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/product";
import {Image} from "../../model/image";
import {Review} from "../../model/review";

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

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + `/products/${id}`, product)
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(API_URL + `/products/${id}`);
  }

  getAllImageByProduct(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL + `/products/${id}/images`);
  }

  getAllProductHasSaleOffGreaterThanZero(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + `/products/sale-off`);
  }

  getAllProductLatest(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + `/products/latest`);
  }

  getAllProductByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products/search?name=' + name);
  }

  getAllReviewByProduct(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(API_URL + `/products/${id}/reviews` + id);
  }
}
