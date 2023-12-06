import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  public getUser(userId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  }
}
