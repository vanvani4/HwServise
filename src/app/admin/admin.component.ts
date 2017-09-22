import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Router,  ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { GuardService } from '../guard/guard.service';
import { AppComponent } from '../app.component'
import { ProductList } from '../product/product';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent /*implements OnInit*/ {
  title = 'Product List';
  productList: any;
  private id: number;
  private activeItem: ProductList;

  constructor (private guardService: GuardService, 
              private product: ProductService, 
              private router: Router, 
              private route: ActivatedRoute,
               private app: AppComponent)  {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product.getAll().then(data => {
          this.activeItem = data[this.id];
      });
  });
  }

  addProduct (text, about) {
    this.product.add(text, about);
  }

  logOut() {
    this.guardService.logout();
    this.router.navigate(['/about', 0]);
    this.app.path = '/about';
  }

  edit(newAbout, newText, id) {
    this.product.editProduct(newText, newAbout, id);
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