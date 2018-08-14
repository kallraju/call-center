import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddAgentComponent} from '../agent/add-agent/add-agent.component';
import {AgentQueueMappingComponent} from '../agent/agent-queue-mapping/agent-queue-mapping.component';
import {AgentQueueRemoveComponent} from '../agent/agent-queue-remove/agent-queue-remove.component';

const routes: Routes = [
  {path: 'addAgent', component: AddAgentComponent},
  {path: 'agentQueueMapping', component: AgentQueueMappingComponent},
  {path: 'agentQueueRemove', component: AgentQueueRemoveComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
