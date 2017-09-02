import { Injectable } from '@angular/core';

let aboutProduct: object;

@Injectable()
export class ProductService {

  productList = [
    {name: "Молоко", isDone: false, about: "1 литр"},
    {name: "Хлеб", isDone: false, about: "Батон, 1 штука"},
    {name: "Вода", isDone: false, about: "6 литров"}
  ]
    
  add(text, about) {
    this.productList.push({name: text, isDone: false, about: about});
    console.log(this.productList);     
  }
    
  change(item) {
    item.isDone = !item.isDone;
  }

  getAboutProduct(productList) {
    aboutProduct = productList.find(x => x.name == name)
    console.log(aboutProduct);
  }
}