import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/products/';
const loginUrl = 'http://localhost:3000/users';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []
  status = "";
  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]> {
      return this.http.get<Product[]>(apiUrl);
  }

  getProductById(id : number) : Observable<Product> {
    return this.http.get<Product>(apiUrl+id);
}

  deleteProduct(id : number)  {

      return this.http.delete(apiUrl+id).pipe(map ((res:any) => {
          return res;
      }))
    }

    editProduct(data : Product, id:number)  {

      return this.http.put<Product>(apiUrl+id,data).pipe(map ((res:any) => {
          return res;
      }))
    }

    loginFunc(username:string, password:string) {
       return this.http.get<any>(loginUrl)
    }

    addProduct(data:any){
      return this.http.post<any>(apiUrl,data)
    }
}
