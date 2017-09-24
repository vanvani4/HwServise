import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { ProductService } from './product.service'
import { Product } from './product'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    productList: Product[];
    lastId: number;

    constructor(private product: ProductService, private router: Router, private activedRoute: ActivatedRoute ){}

    ngOnInit(){
        this.product.getAll().then(data => {
            this.productList = data;
          });

        this.activedRoute.params.forEach((params: Params) => {
            this.lastId = params.id;
        })
    };

    goToAbout(item) {
        this.router.navigate([item.id], {relativeTo: this.activedRoute});
    }

    isLast (item: Product) {
        return item.id === this.lastId;
    }
}
