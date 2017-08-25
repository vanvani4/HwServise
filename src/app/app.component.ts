import { Component } from '@angular/core';
import { ProductServise } from './product.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductServise]
})
export class AppComponent {
  title = 'Product List';

  constructor (private product: ProductServise) {
  }

  addProduct (text) {
    this.product.add(text);
  }

  changeStyle(item) {
    this.product.change(item);
  }
} 
