import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddQueueComponent} from '../queue/add-queue/add-queue.component';
import {CLIDComponent} from '../queue/clid/clid.component';

const routes: Routes = [
  {path: 'addQueue', component: AddQueueComponent},
  {path: 'clid', component: CLIDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule { }
