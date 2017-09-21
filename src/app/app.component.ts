import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'Product List';
  productList: any;


  constructor (private product: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.product.getAll().then(data => {
      this.productList = data;
    });
  }

  goToAbout(item) {
    this.router.navigate(['/about', item.id]);
  }

  admin() {
    this.router.navigate(['/administration']);
  }
} 
