import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public patchBodyPost(val: string) {
    let body = JSON.stringify({
      body: val,
    })
    let headers = new HttpHeaders({ 'content-type': 'application/json; charset=UTF-8' });
    let option = { headers: headers };

    return this.http.patch('https://jsonplaceholder.typicode.com/posts/1', body, option)
      .pipe(
        delay(1000)
      )
  }
}
