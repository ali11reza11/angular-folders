import { Component, Input } from '@angular/core';
import { user } from './app-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() users: user[] = [];
  public userAdded(users: user[]) {
    this.users = users
  }

}
