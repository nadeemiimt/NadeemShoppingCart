import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import {Product} from './product';

@Injectable()
export class ProductService {

      // URL to Products web api
      private productsUrl = 'http://localhost:3000/products';

      constructor(private http: HttpClient) {}

      getProducts(category?: string, search?: string): Observable<Product[]> {
          if (category || search) {
              // const query = <any>{};
              let param;
              if (category) {
                 param = new HttpParams().set('categoryId', category);
                  // query.orderByChild = 'categoryId';
                  // query.equalTo = category;
              } else {
                   param = new HttpParams().set('title', search.toUpperCase());
                  // query.orderByChild = 'title';
                  // query.startAt = search.toUpperCase();
                  // query.endAt = query.startAt + '\uf8ff';
              }
              return this.getProductByParam(param);
          } else {
              return Observable.empty();
          }
      }

      getProductByParam(param: HttpParams): Observable<Product[]> {
        const header = new HttpHeaders().set('Content-Type', 'application/json');
        const options = { headers: header,
          params: param };
          return this.http.get(this.productsUrl, options)
          .map(this.extractData)
          .catch(this.handleError);
      }
      getProduct(id: string): Observable<Product> {
        const header = new HttpHeaders().set('Content-Type', 'application/json');
        const param = new HttpParams().set('id', id);
        const options = { headers: header,
          params: param };
          return this.http.get(this.productsUrl, options)
          .map(this.extractData)
          .catch(this.handleError);
      }
      private extractData(res: HttpResponse<Product[]>) {
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
