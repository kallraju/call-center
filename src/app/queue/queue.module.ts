import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { AddQueueComponent } from './add-queue/add-queue.component';
import { CLIDComponent } from './clid/clid.component';

@NgModule({
  imports: [
    CommonModule,
    QueueRoutingModule
  ],
  declarations: [AddQueueComponent, CLIDComponent]
})
export class QueueModule { }
