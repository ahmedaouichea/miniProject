
import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: '[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() public productItem =new Product(0,"","",0);
    @Output() public childEventDelete = new EventEmitter();
    @Output() public childEventEdit = new EventEmitter();

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  sendEventToDelete(productToDelete : Product){
    this.childEventDelete.emit(productToDelete)
  }

  sendEventToEdit(productToEdit : Product){
    this.childEventEdit.emit(productToEdit);
  }



}
