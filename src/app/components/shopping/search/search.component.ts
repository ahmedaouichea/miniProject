import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  addTagForm!: FormGroup;
  productToAdd = new Product(0,"","",0,[]);

  constructor(private formBuilder : FormBuilder,private productService : ProductService) { }

  @Output() searchValueEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.addTagForm = this.formBuilder.group({
      tag : [''],
  })
  }

  sendSearchValue(a : string){
     this.searchValueEvent.emit(a);
    }
    addTags(){
     this.productToAdd.name = "	Asus Led Monitor";
     this.productToAdd.description ="1ms 75 hz et 23,8 pouces";
     this.productToAdd.price=200;
     this.productToAdd.tag?.push(this.addTagForm.value.tag) ;
     this.productService.addProductTag(1,this.productToAdd).subscribe(res =>{
      console.log("request "+res);
      alert("updated successfully");

     },
     err => {
       alert("something went wrong");
     }

  )
    }
}
