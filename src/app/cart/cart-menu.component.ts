import { Component } from '@angular/core';
import {CartService} from './cart.service';
import {Cart} from './cart';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html'
})
export class CartMenuComponent {

  private cart: Cart;
        constructor(private cartService: CartService) {
          this.cart = this.cartService.cart;
      }

}
