import { Injectable } from '@angular/core';

import { ProductList } from './product';

let productList: ProductList[] = [
  new ProductList(0, "Молоко", false, "1 литр"),
  new ProductList(1, "Хлеб", false, "Батон, 1 штука"),
  new ProductList(2, "Вода", false, "6 литров")
]

let productListPromise = Promise.resolve(productList);

@Injectable()
export class ProductService {
    
  add(text, about) {
    productList.push(new ProductList(productList.length, text, false, about)); 
  }
    
  change(item) {
    item.isDone = !item.isDone;
  }

  getAll(): Promise<ProductList[]> {
    return productListPromise;
  }

  getActiveObj (id: number): Promise<ProductList> {
    return productListPromise
    .then((data) => data.find(item => item.id === id));
  }

  editProduct(newText, newAbout, id) {
    productList[id].name = newText;
    productList[id].about = newAbout;
    //console.log(productList[id]);
  }
}