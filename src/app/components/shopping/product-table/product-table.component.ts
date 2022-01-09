import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  products : Product[] = []

   product = new Product(0,"","",0);
   productToEdit = new Product(0,"","",0);

   formValue !: FormGroup ;

   constructor(private productService : ProductService, private formbuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.formValue = this.formbuilder.group({
      name : [''],
      description : [''],
      price : ['']
    })
}

  getProducts(){
    this.productService.getProducts().subscribe( (productsFromService)=>{
      this.products = productsFromService;
  })
  }

  deleteProduct(productToDelete : Product){
      this.productService.deleteProduct(productToDelete.id).subscribe(res => {
        alert("Product Deleted");
        console.log("here is id "+productToDelete.id);
        this.getProducts();
      })
  }

  editProductForm(productToEdit : Product) {

    this.product.id = productToEdit.id;
    console.log("id here is "+productToEdit.description);
    this.formValue.controls['name'].setValue(productToEdit.name);
    this.formValue.controls['description'].setValue(productToEdit.description);
    this.formValue.controls['price'].setValue(productToEdit.price);

}

editProduct() {
    this.product.name = this.formValue.value.name;
    this.product.description = this.formValue.value.description;
    this.product.price = this.formValue.value.price;
    console.log("hereeee");
    this.productService.editProduct(this.product,this.product.id).subscribe(res =>{
      alert("Edited Successfully");

    })

}

}
