import { Component, OnInit } from '@angular/core';
import { fromEvent, map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable4';
  ngOnInit(): void {
    fromEvent(document, 'click').pipe(
      tap(i => console.log(i)),
      map(event => event as MouseEvent),
      map((item) => {
        return {
          x: item.offsetX,
          y: item.offsetY
        }
      }),
      // take(5),
      takeWhile(item => item.x < 1000),
      tap(i => console.log(i))
    ).subscribe()
  }
}
