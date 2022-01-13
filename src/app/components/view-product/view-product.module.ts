import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductRoutingModule } from './view-product-routing.module';
import { ViewProductComponent } from './view-product.component';


console.warn("view-prod module is loaded");


@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ViewProductRoutingModule
  ]
})
export class ViewProductModule { }
