import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  replypassword: string = '';
  passwordMatch: boolean = false

  userNameChanged(e: Event) {
    this.username = (<HTMLInputElement>e.target).value

  }

  passwordchanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  replypasswordchanged(e: Event) {
    this.replypassword = (<HTMLInputElement>e.target).value
    this.passwordMatch = this.password === this.replypassword ? true : false
  }
} 
