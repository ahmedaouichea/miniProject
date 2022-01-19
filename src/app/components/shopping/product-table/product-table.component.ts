import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})

export class ProductTableComponent implements OnInit {


   product = new Product(0,"","",0);
   productToEdit = new Product(0,"","",0);
   productToEdit1 : any ;
   formValue !: FormGroup ;
   dataSource : any;

   @ViewChild(MatSort ) sort = new MatSort;
   @ViewChild(MatPaginator) paginator ?: MatPaginator;

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

    displayedColumns: string[] = ['id', 'name', 'description', 'price','action'];

    filter(e : string){
      this.dataSource.filter = e.trim().toLowerCase();
    }

  getProducts() {

      this.productService.getProducts().subscribe( (productsFromService)=>{
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = productsFromService;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      })

  }

  deleteProduct(productToDelete : Product){
      this.productService.deleteProduct(productToDelete.id).subscribe(res => {
        alert("Product Deleted");
        this.getProducts();
      })
  }

  editProductForm(productToEdit : Product) {

    this.product.id = productToEdit.id;
    this.formValue.controls['name'].setValue(productToEdit.name);
    this.formValue.controls['description'].setValue(productToEdit.description);
    this.formValue.controls['price'].setValue(productToEdit.price);

}

editProduct() {
    this.product.name = this.formValue.value.name;
    this.product.description = this.formValue.value.description;
    this.product.price = this.formValue.value.price;
    this.productService.editProduct(this.product,this.product.id).subscribe(res =>{
      alert("Edited Successfully");

    })

}





}
