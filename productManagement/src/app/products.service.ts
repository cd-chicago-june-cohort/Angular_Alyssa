import { Injectable } from '@angular/core';
import { Product } from './product'
import { BehaviorSubject } from 'rxjs';

let products = [
  {id: 1, title: 'Toy Plane', price: 10.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCDNRiLnGilx_JK-5wzmTbb-4XjFOtp7UVBAXzvctW8nb6PjY'},
  {id: 2, title: "Beginner's Rubik's Cube", price: 15.00, image: 'data:image/jpeg;base64,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'},
];

@Injectable()
export class ProductsService {
  productsObservable = new BehaviorSubject(products);

  constructor() { }
    
    updateProducts(products: Array<Product>){
      this.productsObservable.next(products);
    }

}
