import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  urlLogin = 'http://192.168.1.30:3000/admin/login';
  urlChangePswd = 'http://192.168.1.30:3000/admin/logout';
  constructor(private objHTTP: HttpClient,private objrouter:Router) {}

  login(frmLoginObj) {
    return this.objHTTP.post(this.urlLogin, frmLoginObj).pipe(map(res => res));
  }

  changePasswd(frmCpObj) {
    return this.objHTTP.post(this.urlChangePswd, frmCpObj).pipe(map(res => res));
  }
  canActivate(){
    if(localStorage.getItem("U_Id")!=undefined){
      this.objrouter.navigate(['navbar']);
      return false;
    }
    return true;
  }
}
