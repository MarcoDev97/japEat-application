import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate{
constructor(private auth: AuthService, private router: Router){

}

  canActivate(){
    const isAuth = this.auth.isLogged();
    if (!isAuth) {
      this.router.navigateByUrl('login');
    }
    //return isAuth;
    return true;
  }
}
