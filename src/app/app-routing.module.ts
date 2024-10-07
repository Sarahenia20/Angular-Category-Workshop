import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategProductComponent } from './categ-product/categ-product.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { NotFoundComponent } from './not-found/not-found.component'; // Import the NotFoundComponent

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categProducts', component: CategProductComponent },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'category/:id', component: DetailsCategoryComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
