/*
 * Angular Imports
 */
import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/*
 * Components
 */
import {CartService} from '../cart/cart.service';
import {Cart} from '../cart/cart';
import {CartItem} from '../cart/cart-item';
import {CartItemCountComponent} from '../cart/cart-item-count.component';

@Component({
  selector: 'app-checkout-view',
  templateUrl: './checkout-view.component.html',
  styles: []
})
export class CheckoutViewComponent implements OnInit {

      private cart: Cart;
      form: FormGroup;

      constructor(private cartService: CartService, private fb: FormBuilder) {
          this.cart = this.cartService.cart;
      }

      ngOnInit() {
          this.form = this.fb.group({
              firstName: ['', Validators.required],
              lastName: ['', Validators.required],
              email: ['', Validators.required],
              phone: ['', Validators.required],
              address: []
          });
      }

      submit() {
          alert('Submitted');
          this.cartService.clearCart();
      }
  }
