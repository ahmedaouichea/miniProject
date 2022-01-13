import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable,of } from 'rxjs';
import { ProductService } from './services/product.service';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowProdGuard implements CanLoad {

   isLogged = localStorage.getItem("isLogged");
  constructor(private router : Router, private productService : ProductService) {


  }

  canLoad (
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      return this.productService.isLogged1().pipe(
        map(e => {
          if (e) {
            console.log("value of e "+e)
            return true;
          } else {
            return false;
          }
        }),catchError((err) => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
/*
      return this.productService.isLogged2().pipe(
        map(e => {
          if (e) {
            console.log("value of e "+e)
            return true;
          } else {
            return false;
          }
        }),catchError((err) => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );*/




  }
}
