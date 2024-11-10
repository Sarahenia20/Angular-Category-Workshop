import { Component } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
})
export class FormProductComponent {
  product: Product = {
    id: 0,
    name: '',
    image: '',
    categoryId: 0,
    description: '',
    price: 0,
    brand: '',
    promotion: 0,
  };

  productsList: Product[] = [];

  onSave(form: any) {
    if (form.valid) {
      this.product.id = this.productsList.length + 1;
      this.productsList.push({ ...this.product });
      form.resetForm();
      alert('Product added successfully!');
    }
  }
}
