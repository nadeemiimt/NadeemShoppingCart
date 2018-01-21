import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {HttpModule} from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

/**
 * Modules
 */
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

/*
 * Components
 */
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';

/*
 * Routing
 */
import {routing} from './app.routes';

// your interceptor file
import { MyHttpLogInterceptor } from './http.interceptor';
import { UserModule } from './user/user.module';

import {AlwaysAuthGuard} from './UserAuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    NavbarComponent,
    CheckoutViewComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    HttpClientModule,
    CategoryModule,
    CartModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing,
    UserModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true }, AlwaysAuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
