import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { CartViewComponent } from './cart-view.component';
import { CartMenuComponent } from './cart-menu.component';
import { CartService } from './cart.service';
import { CartItemCountComponent } from './cart-item-count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [CartViewComponent, CartMenuComponent, CartItemCountComponent],
  exports: [CartMenuComponent, CartViewComponent, CartItemCountComponent],
  providers: [CartService]
})
export class CartModule { }
