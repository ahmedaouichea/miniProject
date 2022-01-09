import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  public myId : any ;
  product = new Product(0,"","",0);


  constructor(private route:ActivatedRoute, private router: Router,private productService : ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) =>{
        let id = params.get('id');
        this.myId = id;
    });

    this.getProduct();
  }

  getProduct(){

    this.productService.getProductById(this.myId).subscribe( (productFromService)=>{
      this.product = productFromService;
  })
  }

}
