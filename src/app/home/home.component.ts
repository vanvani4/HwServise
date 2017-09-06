import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent {
  title = 'Product List';

  constructor (private product: ProductService) {
  }

  addProduct (text, about) {
    this.product.add(text, about);
  }
} 