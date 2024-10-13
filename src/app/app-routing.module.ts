import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './Composants/home/home.component';
import { ProductsCategoryComponent } from './products-category-component/products-category-component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'category/:id', component: DetailsCategoryComponent },
  { path: 'products/:id', component: ProductsCategoryComponent },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
