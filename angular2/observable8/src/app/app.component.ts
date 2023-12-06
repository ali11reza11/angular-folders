import { Component, OnInit } from '@angular/core';
import { Iaddress, Iuser } from './models/models';
import { Observable, concatAll, delay, map, mergeAll, mergeMap, of, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable8';
  public users: Iuser[] = [
    {
      id: 1,
      name: `ali`
    },
    {
      id: 2,
      name: `mamad`
    },
    {
      id: 3,
      name: `reza`
    }
  ]

  public address: Iaddress[] = [
    {
      userid: 1,
      street: '429 jhd vakj',
      country: 'iran',
      state: 'pa',
      city: 'tehran',
      zipcode: 3

    },
    {
      userid: 2,
      street: '420 jhd vakj',
      country: 'iran',
      state: 'da',
      city: 'yazd',
      zipcode: 9

    },
    {
      userid: 3,
      street: '099 jhd vakj',
      country: 'iran',
      state: 'pa',
      city: 'tehran',
      zipcode: 9

    }
  ]

  constructor() { }
  ngOnInit(): void {

    let users$: Observable<Observable<Observable<Iuser[]>>> = of(of(of(this.users)));
    let address$: Observable<Iaddress>
    const res$ = users$.pipe(
      mergeMap(users => users),
      mergeMap(users => users),
      mergeMap(user => user),
      mergeMap(user => {
        console.log(user)
        address$ = this.getAddress(user.id);
        return address$
      }),
      map((address) => {
        return { ...address, user: this.users[address.userid - 1].name }
      }),
      toArray(),
      tap(i => console.log(i)),
    ).subscribe()
  }

  public getAddress(userid: number): Observable<Iaddress> {
    const add = this.address.findIndex(a => a.userid === userid);
    return of(this.address[add]);
  }
}
