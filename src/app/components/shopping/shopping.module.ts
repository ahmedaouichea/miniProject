import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { MaterialModule } from 'src/app/material/material.module';

console.warn("products module is loaded");

@NgModule({
  declarations: [
    ShoppingComponent,SearchComponent,ProductTableComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ShoppingModule { }
