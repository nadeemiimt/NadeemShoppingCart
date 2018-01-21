/*
 * Angular Imports
 */
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
 * Components
 */
import { CategoryService} from '../category/category.service';
import {Category} from '../category/category';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  // Slide Categories
  slideCategories: Category[];

  // Card categories
  cardCategories: Observable<Category[]>;

  constructor(private categoryServics: CategoryService) {}

  ngOnInit(): void {
    this.cardCategories = this.categoryServics.getCategories();
    this.cardCategories.subscribe((categories: Category[]) => {
      this.slideCategories = [
        categories[0],
        categories[1],
        categories[2]
      ];
    });
  }
}
