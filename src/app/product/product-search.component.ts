/*
 * Angular Imports
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styles: []
})
export class ProductSearchComponent {

      constructor(private router: Router) {}

      searchProduct(value: string) {
          this.router.navigate(['/products'], { queryParams: { search: value} });
      }
  }
