// categories.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../Composants/home/home.component';

@NgModule({
  declarations: [
    ListCategoriesComponent,
    DetailsCategoryComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ],
  exports: [ListCategoriesComponent]
})
export class CategoriesModule { }
