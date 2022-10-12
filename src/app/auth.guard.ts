import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.loggedIn()) {
      const role = route.data["roles"];
      if(role){
        const match =this.authService.matchRol(role);
        console.log(role);

        if(match){
          return true;
        }else{
          this.router.navigate(['/**']);
          return false;
        }
      }

    }

    this.router.navigate(['/login']);
    return false;
  }



}
