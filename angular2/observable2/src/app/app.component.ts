import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Todo } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable2';

  http$?: Observable<Todo[]>;
  donetasks$?: Observable<Todo[]>;
  undonetasks$?: Observable<Todo[]>;

  ngOnInit(): void {
    this.http$ = new Observable((observer) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          return response.json()
        })
        .then((body) => {
          observer.next(body)
        })
        .catch((err) => {
          observer.error(err)
        })
    })

    this.http$ = this.http$.pipe(
      shareReplay()
    )

    this.donetasks$ = this.http$.pipe(
      map(todo => todo.filter(todo => todo.completed === true))
    );
    this.undonetasks$ = this.http$.pipe(
      map(todo => todo.filter(todo => todo.completed === false))
    );
  }
}
