import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedin: boolean = false;

  public isAuthenticated() {
    console.log(12)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin)
      }, 1000);
    })
  }

  public checkauth() {
    return this.loggedin
  }

  public login() {
    this.loggedin = true
  }

  public logout() {
    this.loggedin = false
  }
}
