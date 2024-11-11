import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { HomeComponent } from './Composants/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesModule } from './categories/categories.module';
import { FormProductComponent } from './form-product/form-product.component';
import { FormUserComponent } from './form-user/form-user.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    AddCategoryComponent,
    FormProductComponent,
    FormUserComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CategoriesModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
