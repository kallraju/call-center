import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './main/navbar/navbar.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminService } from './admin/admin.service';



const routes: Routes = [
  /*{path: 'agent', loadChildren: 'src/app/agent/agent-routing.module#AgentRoutingModule'},
  {path: 'queue', loadChildren: 'src/app/queue/queue-routing.module#QueueRoutingModule'},
  {path: 'agent-queue', loadChildren: 'src/app/agent-queue/agent-queue-routing.module#AgentQueueRoutingModule'},
  {path: 'mis', loadChildren: 'src/app/mis/mis-routing.module#MISRoutingModule'},*/
  {path: '', component: LoginComponent, canActivate: [AdminService]},
  {path: 'main', component: NavbarComponent, children: [
    {path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule'},
    {path: 'agent', loadChildren: 'src/app/agent/agent-routing.module#AgentRoutingModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
