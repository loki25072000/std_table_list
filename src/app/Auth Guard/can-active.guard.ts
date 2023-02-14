import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }
  canActivate( ) {
   if(this.session() == null){
this.router.navigateByUrl('/login')
    return true
   }
   else{
    return true
   }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  session(){
   return JSON.parse(localStorage.getItem("loginvalues"))
  }
}
