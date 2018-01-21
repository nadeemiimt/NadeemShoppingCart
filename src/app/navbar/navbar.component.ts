import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements DoCheck, OnInit  {
name: string;
ngOnInit() {
  this.name = localStorage.getItem('currentUser');
}
ngDoCheck() {
this.name = localStorage.getItem('currentUser');
}
}
