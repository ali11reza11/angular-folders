import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, merge, mergeMap, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'observable6';
  @ViewChild('btn', { static: true }) btn?: ElementRef;
  ngOnInit(): void {
    of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      mergeMap((val) => this.pathMultiplePosts(val)),
      tap(i => console.log(i)),
    ).subscribe()

    fromEvent(this.btn?.nativeElement, 'click').pipe(
      tap(() => console.log('click')),
      exhaustMap(() => this.pathsinglepost()),
      tap(i => console.log(i))
    ).subscribe()
  }

  public pathMultiplePosts(postId: number) {
    let body = JSON.stringify({
      body: 'test123',
      title: 'testtile'
    })

    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
    let options = { headers: headers };

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, body, options)
  }
  public pathsinglepost() {
    let body = JSON.stringify({
      body: 'test123',
      title: 'testtile'
    })

    let headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
    let options = { headers: headers };

    return this.http.patch(`https://jsonplaceholder.typicode.com/posts/1`, body, options)
      .pipe(
        delay(2000)
      )
  }
}       
