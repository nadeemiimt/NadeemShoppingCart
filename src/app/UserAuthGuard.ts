import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';

export class AlwaysAuthGuard implements CanActivate {
 // constructor(private router: Router) {}
  canActivate() {
      if (localStorage.getItem('currentUser')) {
      return true;
      } else {
  //      this.router.navigate(['login']);
        alert('You don\'t have permission to view this page');
        return false;
      }
    }
  }
