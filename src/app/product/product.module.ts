import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { ProductSearchComponent } from './product-search.component';
import { ProductListComponent } from './product-list.component';
import { ProductGridComponent } from './product-grid.component';
import { ProductCardComponent } from './product-card.component';
import { ProductViewComponent } from './product-view.component';
import { ProductAddComponent } from './product-add.component';

import { ProductService } from './product.service';

import {CategoryModule} from '../category/category.module';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule, CategoryModule],
  declarations: [ProductListComponent,
     ProductViewComponent,
     ProductCardComponent,
     ProductSearchComponent,
     ProductGridComponent,
     ProductAddComponent],
  exports: [ProductAddComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductCardComponent,
    ProductSearchComponent,
    ProductGridComponent],
  providers: [ProductService]
})
export class ProductModule { }
