import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router } from '@angular/router';
import { GuardService } from '../guard/guard.service';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent /*implements OnInit*/ {
  title = 'Product List';
  productList: any;

  constructor (private guardService: GuardService, private product: ProductService, private router: Router) {
  }

  addProduct (text, about) {
    this.product.add(text, about);
  }

  logOut() {
    this.guardService.logout();
    this.router.navigate(['/about', 0]);
  }

  /*goToAbout(item) {
    this.router.navigate(['/about', item.id]);
  }*/

  /*ngOnInit() {
    this.product.getAll().then(data => {
      this.productList = data;
    });
  }*/
}