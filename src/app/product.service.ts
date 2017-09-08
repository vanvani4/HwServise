import { Injectable } from '@angular/core';

import { productList } from './product-list'

@Injectable()
export class ProductService {

  private productList;
    
  add(text, about) {
    this.productList.push({id: this.productList.length + 1, name: text, isDone: true, about: about}); 
  }
    
  change(item) {
    item.isDone = !item.isDone;
  }

  getProductList() {
    return productList;
  }

  getActiveObj (id) {
    return this.productList[id];
  }
}