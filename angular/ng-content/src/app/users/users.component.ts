import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../app-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  counter: number = 0;
  private _user!: IUser;

  @Input()
  set user(user: IUser) {
    this._user = user;
    this.counter++;
  }

  get(): IUser {
    return this._user
  }
  ngOnInit(): void {
    console.log(this._user)
  }
}
