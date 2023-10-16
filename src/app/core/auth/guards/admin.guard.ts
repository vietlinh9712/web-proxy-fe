import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  /**
   * Constructor
   */
  constructor(
    private _authService: AuthService,
    private _router: Router
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Can activate
   *
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    return this._check();
  }
  /**
   * Check the authenticated status
   *
   * @param redirectURL
   * @private
   */
  private _check(): Observable<boolean>
  {
    // Check the authentication status
    return this._authService.checkIsAdmin()
      .pipe(
        switchMap((isAdmin) => {
          // If the user is not authenticated...
          if ( !isAdmin )
          {
            // Redirect to the sign-in page
            this._router.navigate(['403']);

            // Prevent the access
            return of(false);
          }

          // Allow the access
          return of(true);
        })
      );
  }
}
