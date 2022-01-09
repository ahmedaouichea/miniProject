import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [

      {path: '', redirectTo:'/login', pathMatch:'full'},
      {path: 'products', component : ShoppingComponent},
      {path: 'login', component : LoginComponent},
      {path: 'add-product', component : AddProductComponent},
      {path: 'view-product/:id', component : ViewProductComponent},
      {path: '**', component : PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
