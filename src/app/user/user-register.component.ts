import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { UserService } from './user.service';
import { User } from './user';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html'
})
export class UserRegisterComponent {
  model = new User();
  constructor(private userService: UserService,
    private router: Router,
  private activateRoute: ActivatedRoute) {}
  register() {
    this.userService.register(this.model)
    .subscribe((result) => {
        this.router.navigate(['login']);
    });
  }
}
