/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
 * Components Imports
 */
import {ProductService} from './product.service';
import {Product} from './product';
import {CartService} from '../cart/cart.service';
import {Cart} from '../cart/cart';
import {CartItem} from '../cart/cart-item';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html'
})
export class ProductViewComponent implements OnInit {

      product: Product;
      cartItem: CartItem;

      get quantity(): number {
          return this.cartItem ? this.cartItem.count : 0;
      }

      get amount(): number {
          return this.cartItem ? this.cartItem.amount : 0;
      }

      constructor(private route: ActivatedRoute,
                  private productService: ProductService,
                  private cartService: CartService) { }

      ngOnInit(): void {
          this.route
              .params
              .subscribe(params => {
                  // Get the product id
                  const id: string = params['id'];
                  debugger;
                  // Return the product from ProductService
                  this.productService.getProduct(id).subscribe((product: Product) => this.product = product);
                  // Return the cart item
                  this.cartItem = this.cartService.findItem(id);
              });
      }

      addToCart() {
          this.cartItem = this.cartService.addProduct(this.product);
      }

      removeFromCart() {
          this.cartItem = this.cartService.removeProduct(this.product);
      }
  }
