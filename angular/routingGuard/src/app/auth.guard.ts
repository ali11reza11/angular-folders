import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authservice.isAuthenticated()
      .then((authenticated) => {
        if (authenticated) {
          return true
        }
        else {
          this.router.navigate(['/notauthorizes'])
          return false
        }
      })
  }


}