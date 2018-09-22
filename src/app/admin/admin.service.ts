import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  urlLogin = 'http://sms.teleparishkar.com:3001/admin/login';
  urlChangePswd = 'http://sms.teleparishkar.com:3001/admin/change_pwd';
  constructor(private objHTTP: HttpClient, private objrouter: Router) {}

  login(frmLoginObj) {
    return this.objHTTP.post(this.urlLogin, frmLoginObj).pipe(map(res => res));
  }

  changePasswd(frmCpObj) {
    return this.objHTTP.post(this.urlChangePswd, frmCpObj).pipe(map(res => res));
  }
  canActivate() {
    console.log(localStorage.getItem('U_Id' ));
    if (localStorage.getItem('U_Id' ) !== null) {
      this.objrouter.navigate(['main/admin']);
      return false;
    }
    return true;
  }
}
