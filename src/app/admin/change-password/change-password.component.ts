import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers:[AdminService]
})
export class ChangePasswordComponent  {
  
  cpForm:FormGroup;
  adminID:number;
  conf_pswd:any;
  CR_pswd:string[];
  newPswd:any;
  jsonData:any;

  constructor(private fb:FormBuilder,private objService:AdminService){
    
    localStorage.setItem('admin_id','1'); 
    this.adminID=Number(localStorage.getItem('admin_id'));
    this.cpForm=this.fb.group({
      admin_id:[this.adminID],
      CR_pswd:[''],
      new_pswd:[''],
      conf_pswd:['']
    });
  }

  onSubmit(){
    //alert(JSON.stringify(this.cpForm.value));
    if(this.cpForm.value.new_pswd===this.cpForm.value.conf_pswd){
        this.objService.changePasswd(this.cpForm.value)
        .subscribe((data)=>{
                          this.jsonData=data;
                        alert(this.jsonData.status)},
                          err=>{
                                alert(JSON.stringify(err))
                                });  
    } else{
        alert('Password does not match');
    }
}
}
