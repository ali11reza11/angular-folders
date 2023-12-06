import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Iuser } from './model/app-model';
import { concatMap, filter, from, fromEvent, map, tap } from 'rxjs';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public userservices: UsersService) { }
  title = 'observable5';
  users: Iuser[] = [
    {
      name: 'ali',
      id: 1,
      status: 'active'
    },
    {
      name: 'mamad',
      id: 2,
      status: 'unactive'
    },
    {
      name: 'reza',
      id: 3,
      status: 'active',
    }
  ]
  @ViewChild('input', { static: true }) input?: ElementRef;
  ngOnInit(): void {
    fromEvent(this.input?.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value),
      concatMap(item => this.userservices.patchBodyPost(item)),
      tap(i => console.log(i))
    ).subscribe()
    //   from(this.users).pipe(
    //     filter(user => user.status === 'active')
    //   ).subscribe(console.log)
  }
}
