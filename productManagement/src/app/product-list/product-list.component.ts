import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe(products => {this.products = products});
  }

}
