import { Component } from '@angular/core';
import { IUser } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {
    name: `alireza`,
    age: 17
  }

  users: IUser[] = [
    {
      name: `alireza`,
      age: 17
    },
    {
      name: `mamad`,
      age: 18
    },
    {
      name: `matin`,
      age: 16
    }
  ]
}
