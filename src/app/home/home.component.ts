import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent {
  title = 'Product List';

  constructor (private product: ProductService, private router: Router) {
  }

  productList = this.product.getProductList();

  addProd = this.product.add;

  addProduct (text, about) {
    this.addProd(text, about);
  }

  goToAbout(item: any) {
    this.router.navigate(['/about', item.id]);
  }
} 