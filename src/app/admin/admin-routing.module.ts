import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../admin/login/login.component';
import {ChangePasswordComponent} from '../admin/change-password/change-password.component';
import {LogoutComponent} from '../admin/logout/logout.component';
import { AdminService } from './admin.service';

const routes: Routes = [
  {path: '', component: LoginComponent,canActivate:[AdminService]},
  {path: 'login', component: LoginComponent,canActivate:[AdminService]},
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
