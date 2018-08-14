import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, ChangePasswordComponent, LogoutComponent]
})
export class AdminModule { }
