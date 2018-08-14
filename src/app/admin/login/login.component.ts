import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AdminService]
})
export class LoginComponent  {
  frmAdminLogin=this.fb.group({
    name:[''],
    psw:['']
  });

  constructor(private fb:FormBuilder,private objService:AdminService){}

  onSubmit(){
    //alert(this.loginGroup.value);
    this.objService.login(this.frmAdminLogin.value).subscribe(data=>{
      alert(JSON.stringify(data));
    },
    err=>{
      alert(JSON.stringify(err));
    }
    )
  }
}