import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ShowProdGuard } from './show-prod.guard';
const routes: Routes = [

    {path: '', redirectTo:'/login', pathMatch:'full'},

    {path: 'products', loadChildren:()=> import('./components/shopping/shopping.module').then(mod=>(mod.ShoppingModule)),
      canLoad:[ShowProdGuard],
      canActivate:[ShowProdGuard]
  },

  {path: 'login', loadChildren:() => import('./components/login/login.module').then(mod=>mod.LoginModule),
    canLoad:[AuthGuard]
  },

    {path: 'add-product',loadChildren : () => import ('./components/add-product/add-product.module').then(mod=>(mod.AddProductModule)),
    canLoad:[ShowProdGuard],
    canActivate:[ShowProdGuard]

    },
    {path: 'view-product/:id', loadChildren:()=> import('./components/view-product/view-product.module').then(mod=>(mod.ViewProductModule)), },
    {path: '**', loadChildren:() => import('./components/page-not-found/page-not-found.module').then(mod=>(mod.PageNotFoundModule))},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
