/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

/*
 * Components
 */
import {ProductService} from './product.service';
import {Product} from './product';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
      this.route
          .queryParams
          .debounceTime(300) // wait for 300 ms pause in events
          .distinctUntilChanged() // only changed values pass
          .subscribe(params => {
              const category: string = params['category'];
              const search: string = params['search'];
              this.products = this.productService.getProducts(category, search).map(this.transform);
          });
  }

  transform(source: Product[]) {
      let index = 0;
      let length = source.length;

      const products = [];

      while (length) {
          const row: Product[] = [];
          if (length >= 3) {
              for (let i = 0; i < 3; i++) {
                  row.push(source[index++]);
              }
              products.push(row);
              length -= 3;
          } else {
              for (; length > 0; length--) {
                  row.push(source[index++]);
              }
              products.push(row);
          }
      }

      return products;
  }

  addToCart(product: Product) {
      this.cartService.addProduct(product);
  }
}
