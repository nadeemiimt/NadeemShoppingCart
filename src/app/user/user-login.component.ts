import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {
  model = new User();
  loading = false;
  constructor(private userService: UserService,
    private router: Router,
  private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((par) => {
      const isLogout =  par['isLogout'] === 'true';
      if (isLogout) {
        this.userService.logout();
      }
  });
  }
  loginMethod() {
    this.loading = true;
    let result = false;
    this.userService.login(this.model.userName, this.model.password)
    .subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].userName === this.model.userName && data[i].password === this.model.password) {
          localStorage.setItem('currentUser', data[i].firstName + ' ' + data[i].lastName);
          this.router.navigate(['welcome']);
          result = true;
        }
    }
    if (!result) {
      alert('Invalid Credentials');
    }
     });
     this.loading = false;
  }
}
