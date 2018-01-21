/*
 * Angular Imports
 */
import {Routes, RouterModule} from '@angular/router';

/*
 * Components
 */
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './product/product-list.component';
import {ProductViewComponent} from './product/product-view.component';
import {ProductAddComponent} from './product/product-add.component';
import {CartViewComponent} from './cart/cart-view.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';

import {UserLoginComponent} from './user/user-login.component';
import {UserRegisterComponent} from './user/user-register.component';

import {AlwaysAuthGuard} from './UserAuthGuard';

/*
 * Routes
 */
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'addproduct', component: ProductAddComponent, canActivate: [AlwaysAuthGuard] },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'checkout', component: CheckoutViewComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'login/:isLogout', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent }
];

/*
 * Routes Provider
 */
export const routing = RouterModule.forRoot(routes);
