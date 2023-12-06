import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checklogged: boolean = false

  constructor(private authservices: AuthService) { }

  ngOnInit(): void {
    this.checklogged = this.authservices.checkAuth()
  }

  public logginguser() {
    this.authservices.login()
  }

  public logoutinguser() {
    this.authservices.logout()
  }
}
