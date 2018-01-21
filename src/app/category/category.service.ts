import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from './category';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class CategoryService {

      // URL to Categories web api
      private categoriesUrl = 'http://localhost:3000/categories';
      // We keep categories in cache variable
      private categories: Category[] = [];

      constructor(private http: HttpClient) {}

      getCategories(): Observable<Category[]> {
          return this.http
              .get(this.categoriesUrl)
              .map(this.extractData)
               // .do(data => this.categories = data.body)
              .catch(this.handleError);
      }

      getCategory(id: string): Category {
          for (let i = 0; i < this.categories.length; i++) {
              if (this.categories[i].id === id) {
                  return this.categories[i];
              }
          }
          return null;
      }
      private extractData(res: HttpResponse<Category[]>) {
        const body = res;
        return body;
        }
      private handleError(error: any): Observable<any> {
          const errMsg = (error.message) ? error.message : error.status ?
              `${error.status} - ${error.statusText}` : 'Server error';
          window.alert(`An error occurred: ${errMsg}`);
          return Observable.throw(errMsg);
      }
  }
