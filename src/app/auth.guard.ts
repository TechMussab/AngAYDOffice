import { Injectable } from '@angular/core';
import { CanActivate, Router,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _autService: AuthService,private _router:Router)
  {

  }




  canActivate():boolean
  {
    if(this._autService.isAuthenticated)
    {
      return true;
    }
    this._router.navigate(['login'])
    return true;
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canDeactivate():boolean{
    return !this.canActivate()
  }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
}
