import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { CategoryListComponent } from './category-list.component';
import { CategorySlideComponent } from './category-slide.component';
import { CategoryCardComponent } from './category-card.component';
import { CategoryService } from './category.service';
import { CategoryTitlePipe } from './category.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  declarations: [CategoryListComponent, CategoryTitlePipe, CategoryCardComponent, CategorySlideComponent],
  exports: [CategoryListComponent, CategoryTitlePipe, CategoryCardComponent, CategorySlideComponent],
  providers: [CategoryService]
})
export class CategoryModule { }
