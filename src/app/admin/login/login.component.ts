import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
providers: [AdminService]
})
export class LoginComponent  {
	Status: string;
	lData: any = {};
	frmAdminLogin: FormGroup;
	constructor(private fb: FormBuilder, private objService: AdminService, private objrouter: Router) {
		this.frmAdminLogin = this.fb.group({
			name: [''],
			psw: [''],
		});
	}
	onSubmit() {
		// alert(this.loginGroup.value);
		this.objService.login(this.frmAdminLogin.value).subscribe(data => {
			this.lData = data;
			if (this.lData !== undefined && this.lData.status === 1)
			{
				localStorage.setItem('U_Id', this.lData.user_id);
				this.objrouter.navigate(['navbar']);
			}
			else if (this.lData !== undefined && this.lData.status === 0)
			{
				localStorage.removeItem('U_Id');
				this.Status = "Please provide valid username and password";
			}
		},
		err =>  {
			this.Status = "Something went wrong please try again";
		});
	}

}