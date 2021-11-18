import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authSvc: AuthService, 
    private router: Router
    )
  { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSvc.afAuth.authState.pipe(take(1)).pipe(map(authState => !!authState)).pipe(tap(auth => {
      if(!auth){
        this.router.navigate(['/'])
      }
    }));
  }
  
}
