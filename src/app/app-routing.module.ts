import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAgentComponent } from './agent/add-agent/add-agent.component';


const routes: Routes = [
  {path: 'admin', loadChildren: 'src/app/admin/admin-routing.module#AdminRoutingModule'},
  {path: 'agent', loadChildren: 'src/app/agent/agent-routing.module#AgentRoutingModule'},
  {path: 'queue', loadChildren: 'src/app/queue/queue-routing.module#QueueRoutingModule'},
  {path: 'agent-queue', loadChildren: 'src/app/agent-queue/agent-queue-routing.module#AgentQueueRoutingModule'},
  {path: 'mis', loadChildren: 'src/app/mis/mis-routing.module#MISRoutingModule'},
  {path: 'AddAgent',
  //loadChildren: 'src/app/admin/admin-routing.module#AdminRoutingModule',
  component: AddAgentComponent}
  //outlet: 'popup'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
