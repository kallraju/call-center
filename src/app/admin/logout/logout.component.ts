import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private objRouter: Router) {
    localStorage.removeItem('U_Id');
    this.objRouter.navigate(['']);
  }

  ngOnInit() {
  }

}
