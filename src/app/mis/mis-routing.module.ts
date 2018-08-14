import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HourlyReportComponent} from '../mis/hourly-report/hourly-report.component';

const routes: Routes = [
  {path: 'hourlyReport', component: HourlyReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MISRoutingModule { }
