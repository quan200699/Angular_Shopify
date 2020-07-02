import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Review} from "../../model/review";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }

  getAllReview(): Observable<Review[]> {
    return this.http.get<Review[]>(API_URL + '/reviews');
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(API_URL + '/reviews', review);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>(API_URL + `/reviews/${id}`, review)
  }

  deleteReview(id: number): Observable<Review> {
    return this.http.delete<Review>(API_URL + `/reviews/${id}`)
  }

  getReview(id: number): Observable<Review> {
    return this.http.get<Review>(API_URL + `/reviews/${id}`)
  }

  getReviewByUserAndProduct(userId: number, productId: number): Observable<Review> {
    return this.http.get<Review>(API_URL + `/reviews/users/${userId}/products/${productId}`);
  }
}
