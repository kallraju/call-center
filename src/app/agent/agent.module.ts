import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AgentQueueMappingComponent } from './agent-queue-mapping/agent-queue-mapping.component';
import { AgentQueueRemoveComponent } from './agent-queue-remove/agent-queue-remove.component';

@NgModule({
  imports: [
    CommonModule,
    AgentRoutingModule
  ],
  declarations: [AddAgentComponent, AgentQueueMappingComponent, AgentQueueRemoveComponent]
})
export class AgentModule { }
