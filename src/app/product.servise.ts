import {Injectable} from '@angular/core';

@Injectable()
export class ProductServise {
    productList = [
        {name: "Молоко", isDone: false},
        {name: "Хлеб", isDone: false},
        {name: "Вода", isDone: false}
      ]
    
      add(text) {
        this.productList.push({name: text, isDone: false});
    }
    
      change(item) {
        item.isDone = !item.isDone;
      }
}