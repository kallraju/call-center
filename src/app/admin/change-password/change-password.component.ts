import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  providers: [AdminService]
})
export class ChangePasswordComponent  {
  ChangePswdForm: FormGroup;
  jsonData: any;

  constructor(private fb: FormBuilder, private objService: AdminService) {
    this.ChangePswdForm = this.fb.group({
      curPWD: [''],
      newPWD: [''],
      conf_pswd: ['']
    });
  }

  onSubmit() {
    // alert(JSON.stringify(this.cpForm.value));
    if (this.ChangePswdForm.value.newPWD === this.ChangePswdForm.value.conf_pswd) {
        this.objService.changePasswd(this.ChangePswdForm.value)
        .subscribe((data) => {
                          this.jsonData = data;
                        alert(this.jsonData.status);
                      },
                          err => {
                                alert(JSON.stringify(err));
                            });
    } else {
        alert('Password does not match');
    }
}
}
