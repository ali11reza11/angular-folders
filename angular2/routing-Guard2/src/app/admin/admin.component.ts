import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private authservice: AuthService, private router: Router) { }

  public onuserloggedin(user: string, pass: string, event: Event) {
    event.preventDefault()
    if (user === 'ali' && pass === '123') {
      this.authservice.login()
    }
    else {
      this.router.navigate(['/notauthorized']);
    }
  }
}
