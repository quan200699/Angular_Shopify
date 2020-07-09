import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable} from "rxjs";
import {Notification} from "../../model/notification";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  findAllNotification(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL + `/users/${id}/notifications`);
  }

  findAllNotificationDateDesc(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(API_URL + `/users/${id}/notifications-desc`);
  }
}
