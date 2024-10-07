import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { HomeComponent } from './Composants/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { CategProductComponent } from './categ-product/categ-product.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    FilterPipe,
    HighlightDirective,
    CategProductComponent,
    DetailsCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
