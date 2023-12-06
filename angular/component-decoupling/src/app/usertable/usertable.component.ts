import { Component, Input } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
  @Input() users: user[] = [
    {
      email: 'a@email.com',
      password: `1234`,
      address: `yazd`
    },
    {
      email: 'b@email.com',
      password: `1e234`,
      address: `tehran`
    },
    {
      email: 'c@email.com',
      password: `12345`,
      address: `yazd`
    }
  ];
}
