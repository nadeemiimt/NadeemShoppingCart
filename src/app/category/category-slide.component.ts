/*
 * Angular Imports
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

/*
 * Components
 */
import {Category} from './category';

@Component({
  selector: 'app-category-slide',
  templateUrl: './category-slide.component.html'
})
export class CategorySlideComponent {
  @Input() category: Category;
  @Output() select: EventEmitter<Category> = new EventEmitter<Category>();
}
