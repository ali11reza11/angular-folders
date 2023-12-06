import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedin: boolean = false;

  public isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin)
        console.log(resolve(this.loggedin));

      }, 1000);
    })
  }

  public checkAuth(): boolean {
    return this.loggedin;
  }

  public login() {
    this.loggedin = true
  }

  public logout() {
    this.loggedin = false
  }


}
