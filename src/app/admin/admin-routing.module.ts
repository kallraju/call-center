import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangePasswordComponent} from '../admin/change-password/change-password.component';
import {LogoutComponent} from '../admin/logout/logout.component';


const routes: Routes = [
  {path: 'changePassword', component: ChangePasswordComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
