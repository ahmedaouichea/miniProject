import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable,of } from 'rxjs';
import { ProductService } from './services/product.service';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  isLogged = localStorage.getItem("isLogged");

  constructor(private router : Router,private productService : ProductService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
/*

        return this.productService.isLogged().pipe(
          map(e => {
            if (e) {
              console.log("value of e "+e)
              return false;
            } else {
              return true;
            }
          }),catchError((err) => {
            this.router.navigate(['/login']);
            return of(false);
          })
        );*/
        return true;
  }
}
