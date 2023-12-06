import { Component, OnInit } from '@angular/core';
import { Observable, catchError, forkJoin, of } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observable9';
  constructor(public userservice: UserService) { }
  ngOnInit(): void {

    let arrObs$: Observable<any>[] = [];

    for (let i = 0; i < 11; i++) {
      arrObs$.push(this.userservice.getUser(i).pipe(
        catchError(err => of(err))
      ));
    }
    console.log(arrObs$)
    forkJoin(arrObs$).subscribe(console.log)
  }
}