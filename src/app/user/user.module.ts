import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { UserLoginComponent } from './user-login.component';
import { UserRegisterComponent } from './user-register.component';
import { UserService } from './user.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  declarations: [UserLoginComponent, UserRegisterComponent],
  exports: [UserLoginComponent, UserRegisterComponent],
  providers: [UserService]
})
export class UserModule { }
