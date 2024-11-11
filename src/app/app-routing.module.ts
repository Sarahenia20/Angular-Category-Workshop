import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormUserComponent } from './form-user/form-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'add-product',
    component: FormProductComponent
  },
  {
    path: 'add-user',
    component: FormUserComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
