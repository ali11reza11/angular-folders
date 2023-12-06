import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class authguard implements CanActivateChild {
  constructor(private authservice: AuthService, private router: Router) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authservice.isAuthenticated()
      .then((authenticated) => {
        if (authenticated) {
          console.log(1)
          return true
        }
        else {
          console.log(2)
          this.router.navigate(['/notauthorized'])
          return false
        }
      })
  }
}