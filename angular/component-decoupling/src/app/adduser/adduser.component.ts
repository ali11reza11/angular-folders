import { Component, EventEmitter, Output } from '@angular/core';
import { user } from '../app-interface';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  users: user[] = []

  @Output() onAddUseCicked = new EventEmitter<user[]>()

  adduser(email: string, password: string, address: string, e: Event) {
    e.preventDefault()

    let u: user = {
      email: email,
      password: password,
      address: address,
    };

    this.users.push(u)
    this.onAddUseCicked.emit(this.users)
  }
}
