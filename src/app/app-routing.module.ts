import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategProductComponent } from './categ-product/categ-product.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
// import { NotFoundComponent } from';}

const routes: Routes = [
  {path:"", redirectTo:'categories', pathMatch:"full"},
  {path:"categProducts", component:CategProductComponent},
  {path:"categories", component:ListCategoriesComponent},
  // {path:"**", component:NotFoundComponent},
  { path: 'category/:id', component: DetailsCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
