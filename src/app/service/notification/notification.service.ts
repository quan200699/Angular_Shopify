import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notification} from "../../model/notification";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  getAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL + '/notifications');
  }

  createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(API_URL + '/notifications', notification);
  }

  updateNotification(id: number, notification: Notification): Observable<Notification> {
    return this.http.put<Notification>(API_URL + `/notifications/${id}`, notification)
  }

  deleteNotification(id: number): Observable<Notification> {
    return this.http.delete<Notification>(API_URL + `/notifications/${id}`)
  }

  getNotification(id: number): Observable<Notification> {
    return this.http.get<Notification>(API_URL + `/notifications/${id}`)
  }
}
