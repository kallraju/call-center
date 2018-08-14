import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlLogin="http://192.168.1.30:3000/admin/login";
  urlChangePswd="http://192.168.1.30:3000/admin/logout";
  constructor(private objHTTP:HttpClient) {}

  login(frmLoginObj){
    return this.objHTTP.post(this.urlLogin,frmLoginObj).pipe(map(res=>res));
  }

  changePasswd(frmCpObj){
    return this.objHTTP.post(this.urlChangePswd,frmCpObj).pipe(map(res=>res));
  }

  
}
