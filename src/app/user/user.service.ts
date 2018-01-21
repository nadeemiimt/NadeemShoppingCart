import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
 // URL to user web api
 private userUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

register(user: User): Observable<number> {
  user.id = this.getRandomInt(2, 100000);
  const header = new HttpHeaders().set('Content-Type', 'application/json');
  const options = { headers: header };
    return this.http.post(this.userUrl, user, options)
    .map((success: HttpResponse<number>) => success.status)
    .catch(this.handleError);
}
  login(username: string, password: string): Observable<User[]> {
      return this.http.get(this.userUrl)
             .map(this.extractData)
             .catch(this.handleError)             ;
    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  private extractData(res: HttpResponse<User[]>) {
    const body = res;
    return body;
    }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}

