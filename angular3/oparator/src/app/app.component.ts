import { Component, OnInit } from '@angular/core';
import { fromEvent, map, interval, mergeAll } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'oparator';
  constructor() { }
  ngOnInit(): void {

    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(map(() => interval(1000)));
    // const firstOrder = higherOrder.pipe(mergeAll());

    // firstOrder.subscribe(x => console.log(x));


  }
}
