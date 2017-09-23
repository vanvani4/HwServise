import { Component, OnInit } from '@angular/core';
//import { ProductService } from './product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [/*ProductService*/]
})
export class AppComponent implements OnInit {
  title = 'Product List';
  productList: any;
  //path: string = '/about';


  constructor (/*private product: ProductService,*/ private router: Router) {
  }

  ngOnInit() {
  }


  /*admin() {
    this.router.navigate(['/administration']);
    //this.path = '/administration';
  }*/
}
