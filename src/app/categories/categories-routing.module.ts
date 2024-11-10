import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

const routes: Routes = [
  { path: '', component: ListCategoriesComponent },
  { path: 'category/:id', component: DetailsCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
