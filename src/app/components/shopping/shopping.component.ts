import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})

export class ShoppingComponent implements OnInit {


  constructor(private router : Router,private productService : ProductService) { }
  ngOnInit(): void {
  }

  logout(){
    this.productService.setState(false);
    localStorage.setItem('isLogged',"false");
    console.log(this.productService.isLogged1().subscribe(res=>{console.log("here too "+res); this.router.navigate(['login']); ;return res; }))

  }


  products : Product[] = []



}
