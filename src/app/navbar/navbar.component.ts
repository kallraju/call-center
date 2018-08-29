import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private objRoute: Router) { }
  logOut() {
    localStorage.removeItem('U_Id');
    this.objRoute.navigate(['login']);
  }


  ngOnInit() {
  }

}
