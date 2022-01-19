import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productToAdd = new Product(0,"","",0);

  addProductForm!: FormGroup;

  constructor(private formBuilder : FormBuilder, private productService : ProductService) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
        name : [''],
        description : [''],
        price: ['']
    })
  }

  addProduct(){

    this.productToAdd.name = this.addProductForm.value.name;
    this.productToAdd.description = this.addProductForm.value.description;
    this.productToAdd.price = this.addProductForm.value.price;

    this.productService.addProduct(this.productToAdd).subscribe(res =>{

          console.log(res);
          alert("added successfully");

    },
      err => {
        alert("something went wrong");
      }
    )


  }

}
