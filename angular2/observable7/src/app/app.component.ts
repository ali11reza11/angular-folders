import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable7';
  @ViewChild('input', { static: true }) input?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    fromEvent(this.input?.nativeElement, 'keyup').pipe(
      debounceTime(700),
      map(event => event as KeyboardEvent),
      map(event => (event.target as HTMLInputElement).value),
      tap(i => console.log(i))
    ).subscribe()
  }
}
