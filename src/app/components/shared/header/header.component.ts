import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-responsive.component.scss']
})


export class HeaderComponent implements OnInit {
  clicked = false ;
 menuItems = [
  { title : 'Login', url : '/login', class : 'menu-button', icon:'person' },
  { title : 'Products',url : '/products',class : 'menu-button', icon:'home' },
  { title : 'Add Product',  url : '/add-product',class : 'menu-button', icon: 'add'  },
]


  constructor() { }

  changeState(){
      this.clicked = !this.clicked;
  }

  ngOnInit(): void {
  }

}
