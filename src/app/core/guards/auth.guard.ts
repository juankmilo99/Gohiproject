import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.loggedIn()) {
      const role = route.data["roles"];
      if (role) {
        const match = this.authService.matchRol(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/**']).then();
          return false;
        }
      }

    }

    this.router.navigate(['/login']).then();
    return false;
  }


}
